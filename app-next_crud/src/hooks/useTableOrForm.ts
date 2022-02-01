import { useState } from "react";

export default function useTableOrForm() {
    const [visibale, setVisibale] = useState<'table' | 'form'>('table')

    const showTable = () => setVisibale('table')
    const showForm = () => setVisibale('form')

    return {
        formVisibale: visibale === 'form',
        tableVisibale: visibale === 'table',
        showForm,
        showTable,
    }
}