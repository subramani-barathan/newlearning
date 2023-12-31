import { Button, Card, Col, Row } from "react-bootstrap";
import { BreadcrumbsItem } from "../template/breadcrumb/BreadcrumbDetails";
import { useNavigate } from "react-router-dom";

function Thirukkural() {
  const navigate = useNavigate();
  const gotoSections = () => {
    navigate("/thirukkural/sections")
  };
  return (
    <>
      <BreadcrumbsItem glyph="home" to="/thirukkural">
        திருக்குறள்
      </BreadcrumbsItem>

        <Row>
          <Col className="col-md-12 col-lg-12">
            <Card className="p-4">
              <p className="align-self-center">
                <Button onClick={gotoSections} varient="primary">
                  திருக்குறள் <i className="tf-icons bx bx-right-arrow-alt"></i>
                </Button>
              </p>
              <p>
                திருக்குறள், சுருக்கமாகக் குறள் (ஆங்கிலம்: Tirukkuṟaḷ), ஒரு
                தொன்மையான தமிழ் மொழி அற இலக்கியமாகும். சங்க இலக்கிய
                வகைப்பாட்டில் பதினெண்கீழ்க்கணக்கு எனப்படும் பதினெட்டு நூல்களின்
                திரட்டில் இருக்கும் இந்நூல் குறள் வெண்பா என்னும் பாவகையினாலான
                1,330 ஈரடிச் செய்யுள்களைக் கொண்டது.
              </p>
              <p>
                இந்நூல் முறையே அறம், பொருள், காமம் (அல்லது இன்பம்) ஆகிய மூன்று
                பகுப்புகளை அல்லது தொகுப்புகளைக் கொண்டது. இஃது அடிப்படையில் ஒரு
                வாழ்வியல் நூல். மாந்தர்கள் தம் அகவாழ்விலும் சுமூகமாகக் கூடி
                வாழவும் புற வாழ்விலும் இன்பமுடனும் இசைவுடனும் நலமுடனும் வாழவும்
                தேவையான அடிப்படைப் பண்புகளை விளக்குகிறது.
              </p>
              <p>
                அறநெறிகளைப் பற்றிய உலகின் மிகச்சிறந்த படைப்புகளில் ஒன்றாகக்
                கருதப்படும் இந்நூல், பொதுத்தன்மைக்கும் மதச்சார்பற்ற தன்மைக்கும்
                பெயர் பெற்றது. இதனை இயற்றியவர் திருவள்ளுவர் என்று பாரம்பரியமாக
                அறியப்படுகிறார். இந்நூலின் காலம் பொ.ஊ.மு. 300 முதல் பொ.ஊ. 5-ம்
                நூற்றாண்டு வரை எனப் பலவாறு கணிக்கப்படுகிறது.
              </p>
              <p>
                பாரம்பரியமாக இந்நூல் கடைச்சங்கத்தின் கடைசிப் படைப்பாகக்
                கருதப்பட்டாலும் மொழியியல் பகுப்பாய்வுகள் இந்நூல் பொ.ஊ. 450 முதல்
                500 வரையிலான கடைச்சங்க காலத்திற்குப் பிறகு இயற்றப்பட்டதாகக்
                குறிக்கின்றன.
              </p>
              <p>
                தமிழ்க் கலாச்சாரத்தில் மிகவும் மதிக்கப்படும் ஒரு நூல்
                திருக்குறள். இவ்வுண்மை இந்நூலின் பன்னிரு பாரம்பரியப் பெயர்களான
                "திருக்குறள்" (புனிதமான குறள்), "உத்தரவேதம்" (இறுதி வேதம்),
                "திருவள்ளுவம்" (ஆசிரியரின் பெயர்), "பொய்யாமொழி" (பொய்க்காத
                சொற்கள்), "வாயுறை வாழ்த்து" (சத்தியமான பாராட்டு), "தெய்வநூல்"
                (தெய்வீகப் புத்தகம்), "வள்ளுவமாலை" (ஆசிரியர் கோர்த்த மாலை),
                "முப்பால்" (மூன்று பிரிவு/பகுப்பு), "தமிழ்மறை" (தமிழ் வேதம்),
                "தமிழ்மனு நூல்" (தமிழ் நீதிநூல்), "திருவள்ளுவப் பயன்"
                (ஆசிரியரால் விளைந்த பயன்), மற்றும் "பொதுமறை" (பொதுவான வேதம்)
                ஆகியவற்றால் பிரதிபலிக்கப்படுகிறது.
              </p>
              <p>
                குறளானது, ஈரடிகளில் உலகத் தத்துவங்களைச் சொன்னதால், இஃது ‘ஈரடி
                நூல்’ என்றும், அறம், பொருள், இன்பம் அல்லது காமம் என்னும்
                முப்பெரும் பிரிவுகளைக் கொண்டதால், ‘முப்பால்’ என்றும்
                அழைக்கப்படுகிறது. இஃது உலக மக்கள் அனைவருக்கும், எந்தக்
                காலத்திற்கும், பொருந்தும் வகையில் அமைந்தமையால், இது வான்மறை
                என்றும் உலகப் பொதுமறை என்றும் அழைக்கப்படுகிறது.
              </p>
            </Card>
          </Col>
        </Row>
    </>
  );
}

export default Thirukkural;
