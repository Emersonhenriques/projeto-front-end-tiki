import "./App.css";
import Logo from "./assets/svg/logo-tiki.svg";
import Plus from "./assets/svg/icon-yellow.svg";
import Down from "./assets/svg/arrow down.svg";
import Carousel from "./components/Carousel";

function submitForm() {
  const form = document.getElementById("myForm");
  const submitButton = form.querySelector(".button");
  const originalButtonText = submitButton.textContent;
  submitButton.textContent = "Enviando...";
  submitButton.disabled = true;

  setTimeout(() => {
    form.reset();
    submitButton.textContent = originalButtonText;
    submitButton.disabled = false;
  }, 2000);
}

function App() {
  return (
    <div className="bg">
      <img src={Logo} alt="logo" className="logo" />
      <div className="box-card">
        <p className="text-1">Cuidado, ao rolar pode conter...</p>
        <img src={Plus} alt="plus" className="plus" />
        <p className="spoiller">~Spoillers~</p>
        <img src={Down} alt="down" className="down" />
        <p className="text-2">Você já estava sabendo?</p>
        <Carousel />
      </div>
      <p className="text-3">Quero fazer parte!</p>
      <img src={Plus} alt="plus" className="plus" />
      <div className="box-card-2">
        <p className="text-4">Cadastre-se e fique por dentro das novidades</p>
        <form className="form" id="myForm">
          <input className="name" type="text" placeholder="Nome"></input>
          <input
            className="email"
            type="email"
            placeholder="meuemail@gmail.com"
          ></input>
          <input className="radio" type="radio" checked></input>
          <label className="radio">
            Declaro que li e aceito os termos de uso e política de privacidade
          </label>
          <button type="submit" className="button" onClick={submitForm}>
            Enviar
          </button>
        </form>
        <p className="text-5">TEXTO LEGAL</p>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui
          odio, ullamcorper vel leo sed, lacinia aliquam tortor. Donec in nulla
          nisi. Integer imperdiet vulputate elit, sed varius sem commodo vel.
          Vestibulum ac lacus eros. Nulla facilisi. Morbi ornare, erat lobortis
          semper aliquet, ligula neque pulvinar tellus, a eleifend est ligula a
          nulla. Ut ut sapien lacinia odio ullamcorper aliquet. Nullam ac neque
          lorem. Nulla id erat in massa hendrerit consequat. Nulla fringilla
          pretium pharetra. In lacinia vulputate lectus, ut commodo neque
          aliquam nec. Vestibulum vitae ante turpis. Donec quis aliquet elit,
          non dictum neque. Vivamus tempor neque sit amet ante auctor, et
          rhoncus leo vehicula. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Cras ac metus augue. Curabitur eget tincidunt erat.
          Integer vitae feugiat dui, nec auctor nunc. Suspendisse interdum augue
          et ipsum pharetra, vitae cursus erat tincidunt.
        </p>
      </div>
    </div>
  );
}

export default App;
