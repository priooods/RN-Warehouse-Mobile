export interface FormInput {
    po_number: string | undefined,
    surat_jalan: string | undefined,
    type_tabung: TypeTabung | undefined,
    type_transaction: number | undefined,
    condition: number | undefined,
    sender: string | undefined,
    receiver: string | undefined,
}
export interface TypeTabung {
    id: number,
    title: string,
    chemical: string
}