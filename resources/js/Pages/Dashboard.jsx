import React from "react";
import AdminDashboard from "@/Layouts/AdminDashboard";
import Container from "@/Components/Container";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <div className="mt-4">
            <Container>
                <Head title="Dashboard" />
                <h1>Dashboard</h1>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vitae, hic? Commodi cupiditate enim maiores natus, error
                    repudiandae quis maxime doloribus illum, totam labore earum
                    iste quod dolorum, ea voluptatum quo?
                </div>
            </Container>
        </div>
    );
}
Dashboard.layout = (page) => <AdminDashboard children={page} />;
