import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

interface Props {
    params: {
        id: string;
    };
}

export async function GET(request: NextRequest, { params }: Props) {
    const user = await prisma.user.findUnique({ where: { id: params.id } });

    if (!user)
        return NextResponse.json({ error: "User Not Found" }, { status: 404 });

    return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: Props) {
    // Validate request body. If invalid, return 400.
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });

    // Check if user exists. If doesn't, return 404
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    if (!user)
        return NextResponse.json({ error: "User Not Found" }, { status: 404 });

    // Update the user, return updated user
    const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: {
            name: body.name,
            email: body.email,
        },
    });
    return NextResponse.json(updatedUser);
}

export async function DELETE(request: NextRequest, { params }: Props) {
    // Check is user exists. If not found, return 404
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    if (!user)
        return NextResponse.json({ error: "User Not Found" }, { status: 404 });

    await prisma.user.delete({
        where: {
            id: user.id,
        },
    });
    // Delete the user, return 200
    return NextResponse.json({}, { status: 200 });
}
