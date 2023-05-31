function ButtonPrimaryNormal() {
  return (
    <>
      <p>Normal</p>
      <button type="button" className="btn btn-primary">Button</button>
      <button type="button" className="btn btn-primary btn-round">Button</button>
    </>
  )
}

function ButtonPrimaryHover() {
  return (
    <>
      <p>Hover</p>
      <button type="button" className="btn btn-primary btn-primary-hover">Button</button>
      <button type="button" className="btn btn-primary btn-primary-hover btn-round">Button</button>
    </>
  )
}

function ButtonPrimarySelected() {
  return (
    <>
      <p>Selected</p>
      <button type="button" className="btn btn-primary btn-primary-active">Button</button>
      <button type="button" className="btn btn-primary btn-primary-active btn-round">Button</button>
    </>
  )
}

function ButtonPrimaryDisabled() {
  return (
    <>
      <p>Disabled</p>
      <button type="button" className="btn btn-primary" disabled>Button</button>
      <button type="button" className="btn btn-primary btn-round" disabled>Button</button>
    </>
  )
}

function ButtonPrimaryList() {
  return (
    <ul className="button-guide">
      <li>
        <ButtonPrimaryNormal />
      </li>
      <li>
        <ButtonPrimaryHover />
      </li>
      <li>
        <ButtonPrimarySelected />
      </li>
      <li>
        <ButtonPrimaryDisabled />
      </li>
    </ul>
  );
}

export default ButtonPrimaryList;