'use client'
import { Suspense } from "react"
import FormUsuario from "@/components/usuario/FormUsuario"
import { Divide } from "lucide-react"

export default function Page() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <FormUsuario />
        </Suspense >
    )
}