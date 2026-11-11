const CardCarrossel = ({ titulo, subtitulo, imagem, altImagem }) => {
    return (
        <article className="flex min-h-[460px] md:min-h-[500px] w-full flex-col overflow-hidden rounded-3xl bg-white text-left shadow-lg ring-1 ring-black/5">
            <div className="flex h-64 sm:h-72 md:h-80 w-full shrink-0 items-center justify-center bg-emerald-50 p-6 md:p-8">
                {imagem && <img src={imagem} alt={altImagem || ""} className="h-full w-full object-contain" />}
            </div>
            <div className="flex flex-1 flex-col justify-center gap-4 p-8 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{titulo}</h2>
                <p className="text-base sm:text-lg leading-relaxed text-gray-600">{subtitulo}</p>
            </div>
        </article>
    );
};

export default CardCarrossel;
