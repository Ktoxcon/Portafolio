import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <MDBFooter className="font-small darken-3 pt-0 footer">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="py-5">
            <br />
            <br />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} KToxcon
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
