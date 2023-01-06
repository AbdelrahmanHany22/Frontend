import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "bootstrap/dist/css/bootstrap.min.css";

function DropdownYear({year, setContactInfo,contactInfo}) {

  function handleClick(value) {
    console.log('entered',value);
    setContactInfo({ ...contactInfo, year: value });
  }

  return (
    <DropdownButton className="mt-2" menuVariant="dark" variant='outline-dark' title={year==''?'Year':year}>
      <Dropdown.Item onClick={() => handleClick(2023)}>2023</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(2024)}>2024</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(2025)}>2025</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(2026)}>2026</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(2027)}>2027</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(2028)}>2028</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(2029)}>2029</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(2030)}>2030</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(2031)}>2031</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(2032)}>2032</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(2033)}>2033</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(2034)}>2034</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(2035)}>2035</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(2036)}>2036</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(2037)}>2037</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(2038)}>2038</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(2039)}>2039</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(2040)}>2040</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(2041)}>2041</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(2042)}>2042</Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick(2043)}>2043</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownYear;