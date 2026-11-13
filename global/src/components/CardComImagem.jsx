const CardComImagem = ({ titulo, subtitulo, imagem, altImagem }) => {
    return (
        <article className="flex min-h-[360px] w-full max-w-[380px] flex-col overflow-hidden rounded-3xl bg-black text-left shadow-md ring-1 ring-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex h-48 w-full shrink-0 items-center justify-center bg-black p-5">
                {imagem && <img src={imagem} alt={altImagem || ""} className="h-full w-full object-contain" />}
            </div>
            <div className="flex flex-1 flex-col justify-center gap-3 p-6">
                <h2 className="text-xl font-bold text-white">{titulo}</h2>
                <p className="text-sm leading-relaxed text-white/70">{subtitulo}</p>
            </div>
        </article>
    );
};

export default CardComImagem;
