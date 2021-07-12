import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  height: 60px;
  background: #FFAE42;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
`;

const StyledLogo = styled.a`
  padding: 0rem 2rem;
  font-weight: bold
`

const StyledInput = styled.input`
  padding: 0rem 2rem;
`

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href='/' passHref>
          <StyledLogo>SubHub</StyledLogo>
        </Link>
      </div>
      <div>
        <Link href='/' passHref>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href='/about' passHref>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href='/contact' passHref>
          <StyledLink>Contact</StyledLink>
        </Link>
      </div>
      <div>
        <StyledInput type="text" />
      </div>
    </Nav>
  );
};

export default Navbar;