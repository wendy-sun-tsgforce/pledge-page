
import React from "react";
import {Container, Row} from "reactstrap";
// reactstrap components

// core components
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import {
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";


function ThankYou() {
  return (
    <div>
      <ProfilePageHeader />
      <div className="main h-100">
        <Container className="tim-container">
          <div className='align-center' id="typography">
            <h1>Thank You!</h1>
            <h4>Your support means we are one step closer to our goal.</h4>
          </div>
          <Row className='justify-content-center py-4 '>
          <TwitterShareButton
          url={'https://twitter.com/share?ref_src=twsrc%5Etfw'}
          title={'I just signed a pledge with Shatterproof.'}>
                <TwitterIcon/>
          </TwitterShareButton>

          <FacebookShareButton
          url={'https://www.shatterproof.org/'}
          quote={'I just signed a pledge with Shatterproof.'}>
                <FacebookIcon/>
          </FacebookShareButton>

          <EmailShareButton
          url={'https://www.shatterproof.org/'}
          subject={'Join me in signing a pledge with Shatterproof.'}>
                <EmailIcon/>
          </EmailShareButton>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ThankYou;
