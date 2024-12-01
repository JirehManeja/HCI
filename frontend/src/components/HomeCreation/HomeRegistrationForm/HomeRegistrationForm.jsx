import './HomeRegistrationForm.css'
import Input from '../../Input/Input'
import Button from '../../Button/Button'

function HomeRegistrationForm() {
  return(
    <div className="hrf-wrapper">
      <div className="title-container">
        <span className="form-title">Home Registration Form</span>
        <span className="form-subtitle">Please fill up the requested informtaion below.</span>
      </div>

      <div className="form-note">
        NOTE: By Registering your home, you will be able to manage the smart devices housed within.
      </div>

      <form action="" className="hrf-form">
        <div className="input-containerz">
          <div className="label-container">
            <span className="label1">Home Name</span>
            <span className="label2">You can change the home name later</span>
          </div>
          <Input type={'text'} placeholder={'Home Name'}/>
        </div>

        <div className="input-containerz">
          <div className="label-container">
            <span className="label1">Address</span>
            <span className="label2">Help us pinpoint your location by providing your location</span>
          </div>
          <Input type={'text'} placeholder={'Municipal'}/>
        </div>

        <div className="input-containerz">
          <div className="label-container">
            <span className="label1"></span>
            <span className="label2"></span>
          </div>
          <Input type={'text'} placeholder={'Barangay'}/>
        </div>

        <div className="button-container">
          <Button btnName={'Register Home'}/>
        </div>
      </form>

      <div className="divider">
        <span className="or">OR</span>
      </div>

      <form action="#" className="referral-form">
        <div className="ref-title">Want to have access to another home?</div>

        <div className="input-containerz-sa-referral">
          <div className="label-container">
            <span className="label1">Referral Code</span>
            <span className="label2">Join a shared home by entering the referral code.</span>
          </div>

          <Input type={'text'} placeholder={'Home Code'}/>
        </div>
        <span className="hint">Home Code is provided by the Home Owner</span>
        <Button btnName={'Join Home'}/>
      </form>
    </div>
  )
}

export default HomeRegistrationForm