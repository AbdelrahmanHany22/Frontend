import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "bootstrap/dist/css/bootstrap.min.css";

function DropdownMonth({month, setContactInfo,contactInfo}) {

  function handleClick(value) {
    console.log('entered',value);
    setContactInfo({ ...contactInfo, month: value });
  }

  return (
    <DropdownButton className="mt-2" menuVariant="dark" variant='outline-dark' title={month==''?'Month':month}>
      <Dropdown.Item onClick={() => handleClick(1)}>1</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(2)}>2</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(3)}>3</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(4)}>4</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(5)}>5</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(6)}>6</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(7)}>7</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(8)}>8</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(9)}>9</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(10)}>10</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(11)}>11</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(12)}>12</Dropdown.Item>
      
    </DropdownButton>
  );
}

export default DropdownMonth;