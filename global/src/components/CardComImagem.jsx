const CardComImagem = ({ titulo, subtitulo, imagem, altImagem }) => {
    return (
        <article className="flex min-h-75 w-85 flex-col overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-black/5">
            <div className="flex h-48 w-full shrink-0 items-center justify-center bg-emerald-50 p-5">
                {imagem && <img src={imagem} alt={altImagem || ""} className="h-full w-full object-contain" />}
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
                <h2 className="text-xl font-semibold text-gray-900">{titulo}</h2>
                <p className="text-sm leading-6 text-gray-600">{subtitulo}</p>
            </div>
        </article>
    )
}

export default CardComImagem
