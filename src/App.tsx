import fbLogo from "./assets/fb.svg";
import googleLogo from "./assets/google.svg";
import olxLogo from "./assets/olx.svg";

function App() {
  return (
    <div className="w-full h-[100vh] bg-[#f9f9f9] flex justify-center">
      <div className="flex flex-col justify-center max-w-[466px] my-16 mx-auto">
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
                <label
                  htmlFor="email"
                  className="text-[#4a4a4a] font-bold text-base"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg px-4 py-3 mt-2 border border-gray-300 bg-inherit"
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
            <div className="divider text-[#898989] before:bg-[#cfd4dd] before:h-[1px] after:h-[1px] after:bg-[#cfd4dd]">
              Ou conecte com
            </div>
            <div className="flex flex-row justify-center">
              <span className="text-white p-4 flex items-center justify-center rounded-full bg-[#4285f4] mr-8">
                <img
                  src={googleLogo}
                  width={24}
                  height={24}
                  alt="Google logo"
                />
              </span>
              <span className="text-white p-4 flex items-center justify-center rounded-full bg-[#3a5998]">
                <img
                  src={fbLogo}
                  width={24}
                  height={24}
                  alt="Facebook logo"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
