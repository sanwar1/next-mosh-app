import React, { CSSProperties } from "react";
import {
    Html,
    Preview,
    Body,
    Container,
    Text,
    Link,
    Tailwind,
} from "@react-email/components";

interface Props {
    name: string;
}

const WelcomeTemplate = ({ name }: Props) => {
    return (
        <Html>
            <Preview>Welcome Aboard!</Preview>
            <Tailwind>
                <Body className="bg-white">
                    <Container>
                        <Text className="font-bold text-3xl">
                            Hello {name}!
                        </Text>
                        <Link href="www.example.com">www.example.com</Link>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default WelcomeTemplate;
