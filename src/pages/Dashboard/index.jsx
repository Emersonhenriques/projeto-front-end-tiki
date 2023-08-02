import "./index.css";
import Logo from "../../assets/svg/logo-tiki.svg";
import Plus from "../../assets/svg/icon-yellow.svg";
import Down from "../../assets/svg/arrow down.svg";
import Spoilers from "../../assets/svg/tittle1.svg";
import Title2 from "../../assets/svg/tittle2.svg";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import Text from "../../components/Text";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useState } from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);

  function submitForm(event) {
    // Evitar um recarregamento/atualização do navegador
    event.preventDefault();
    const form = document.getElementById("myForm");
    setLoading(true);
    setTimeout(() => {
      form.reset();
      setLoading(false);
    }, 2000);
  }

  return (
    <div className="bg">
      <Header src={Logo}></Header>
      <Cards size="big">
        <Text class="bold-36">Cuidado, ao rolar pode conter...</Text>
        <img src={Plus} alt="plus" className="plus" />
        <img src={Spoilers} alt="spoilers" />
        <img src={Down} alt="down" className="down" />
        <Text class="bold-18">Você já estava sabendo?</Text>
        <Carousel />
      </Cards>

      <img src={Title2} alt="title2" className="title2" />
      <img src={Plus} alt="plus" className="plus" />
      <Cards size="small">
        <div className="container">
          <Text class="bold-18 center">
            Cadastre-se e fique por dentro das novidades
          </Text>
          <form className="form" id="myForm">
            <Input type="text" placeholder="Nome"></Input>
            <Input type="email" placeholder="meuemail@gmail.com"></Input>
            <Input
              label={
                "Declaro que li e aceito os termos de uso e política de privacidade"
              }
              className="radio"
              type="radio"
              checked
            ></Input>
            <Button
              type="submit"
              label={"Enviar"}
              loading={loading}
              onClick={submitForm}
            ></Button>
          </form>
        </div>
      </Cards>
      <Footer />
    </div>
  );
};

export default Dashboard;
