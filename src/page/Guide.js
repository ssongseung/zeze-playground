import ColorBasicList from "../guide/ColorBasicList";
import ColorGrayList from "../guide/ColorGrayList";
import ColorAccentsList from "../guide/ColorAccentsList";
import ColorDestructiveList from "../guide/ColorDestructiveList";
import ButtonPrimaryList from "../guide/ButtonPrimaryList";
import ButtonSecondaryList from "../guide/ButtonSecondaryList";

function Guide() {
  return (
    <>
    <section className="guide__section section__color">
      <h2>COLOR</h2>
      <h3>Basic</h3>
      <ColorBasicList />
      <h3>Graybase</h3>
      <ColorGrayList />
      <h3>Accents</h3>
      <ColorAccentsList />
      <h3>Destructive</h3>
      <ColorDestructiveList />
    </section>
    <section className="guide__section section__btn">
        <h2>Button</h2>
        <h3>Primary</h3>
        <ButtonPrimaryList />
        <h3>Secondary</h3>
        <ButtonSecondaryList />
    </section>
    </>
  );
}

export default Guide;
