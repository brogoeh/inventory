import React from "react";
import { Head } from "@inertiajs/react";
import Container from "@/Components/Container";
import AdminDashboard from "@/Layouts/AdminDashboard";

export default function Home() {
    return (
        <>
            <Head title="Users/Create" />
            <Container>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                adipisci fugiat ex velit quia consequatur, beatae accusantium
                quis qui eaque suscipit, sed mollitia deleniti. Beatae eos cum
                expedita quaerat alias!
            </Container>
        </>
    );
}

Home.layout = (page) => <AdminDashboard children={page} />;
