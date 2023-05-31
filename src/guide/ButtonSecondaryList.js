function ButtonSecondaryNormal() {
  return (
    <>
      <p>Normal</p>
      <button type="button" className="btn btn-secondary">Button</button>
      <button type="button" className="btn btn-secondary btn-round">Button</button>
    </>
  )
}

function ButtonSecondaryHover() {
  return (
    <>
      <p>Hover</p>
      <button type="button" className="btn btn-secondary btn-secondary-hover">Button</button>
      <button type="button" className="btn btn-secondary btn-secondary-hover btn-round">Button</button>
    </>
  )
}

function ButtonSecondarySelected() {
  return (
    <>
      <p>Selected</p>
      <button type="button" className="btn btn-secondary btn-secondary-active">Button</button>
      <button type="button" className="btn btn-secondary btn-secondary-active btn-round">Button</button>
    </>
  )
}

function ButtonSecondaryDisabled() {
  return (
    <>
      <p>Disabled</p>
      <button type="button" className="btn btn-secondary" disabled>Button</button>
      <button type="button" className="btn btn-secondary btn-round" disabled>Button</button>
    </>
  )
}

function ButtonSecondaryList() {
  return (
    <ul className="button-guide">
      <li>
        <ButtonSecondaryNormal />
      </li>
      <li>
        <ButtonSecondaryHover />
      </li>
      <li>
        <ButtonSecondarySelected />
      </li>
      <li>
        <ButtonSecondaryDisabled />
      </li>
    </ul>
  );
}

export default ButtonSecondaryList;