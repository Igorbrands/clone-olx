import olxLogo from "./assets/olx.svg";

function App() {
  return (
    <div className="container w-full h-[100vh] bg-[##f9f9f9] flex justify-center items-center">
      <div className="flex flex-col justify-center my-16 mx-auto max-w-[466px]">
        <div className="bg-white shadow-[rgba(153,153,153,0.2)_0px_2px_4px_0px] pt-8 pb-6 px-14 rounded-t ">
          <div className="flex flex-col items-center mb-2">
            <a href="https://olx.com.br" target="_blank">
              <img
                src={olxLogo}
                width={64}
                height={64}
                className="min-w-[12px] min-h-[12px] "
                alt="OLX logo"
              />
            </a>
            <span className="text-[#1a1d23]">Acesse a sua conta</span>
          </div>

          <div className="flex flex-col mb-4">
            <form>
              <div className="mb-4">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  className="w-full rounded-lg px-4 py-3 mt-2 border border-gray-300"
                />
              </div>
              <button className="bg-[#f28000] rounded-[500px] px-6 py-2 text-white w-full">
                Continuar
              </button>
            </form>
          </div>
          <div>
            <button className="border border-[#f28000] bg-white rounded-[500px] px-6 py-2 text-[#4a4a4a] w-full">
              Entrar sem senha
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
