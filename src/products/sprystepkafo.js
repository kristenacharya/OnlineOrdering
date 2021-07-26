import React from "react";
import Card from '../context.js';
import { UserContext } from '../context.js';

function SpryStepKafo(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [amount, setAmount]     = React.useState('');
    const ctx = React.useContext(UserContext);  
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData);
        ctx.users.push({name:formData.get('name'), email:formData.get('email'), phone:formData.get('phone'), account: formData.get('billing-account') + "/" + formData.get('billing-account')});
        window.location.href = "#/alldata/";
      };

    return (
        <Card
        txtcolor="black"
        header="SpryStep Vector KAFO"
        body={
            <>
            <div className="row">
                <div className="col-md-6">
                    <img className="prod-image" src="../images/SpryStep-KAFO-Vector-001_Web.png" />
                </div>
                <div className="col-md-6">
                    <h5>Product Details</h5>
                    <p>The Custom Spiral AFO is an elegant, durable, patient-friendly custom composite AFO. All four models feature our signature posterior lateral spiral strut that offers biomechanical and fitting advantages. Each model also includes a molded inner boot.</p>

                    <p><span className="blue italic bold">Recommended for:</span> Wide variety of neurological conditions affecting the lower limbs where control of the ankle-foot complex is required (drop foot, plantar flexion weakness etc). Conditions presenting with knee instability may also be considered (crouch gait, knee hyperextension etc).</p>

                    <h5>Features</h5>
                    <ul>
                    <li>Malleable heat formable thermoplastic moulded inner boot and calf cuff </li>
                    <li>Cyclic load resistant aramid forefoot</li>
                    <li>Exclusive posterior lateral strut fits easily into most shoes </li>
                    <li>Open heel design for greater comfort</li>
                    <li>Composite shell avoids bony prominences</li>
                    </ul>

                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-12">
                    <h5>Order This Product</h5>
                    <form onSubmit={handleSubmit}>
                        <p><span className="blue bold">Contact Information</span></p>
                        <div className="row">
                            <div className="col-sm-6">
                                <label className="blue">Name</label>
                                <input type="input" className="form-control" id="name" name="name" placeholder="Full Name"></input>
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Email</label>
                                <input type="input" className="form-control" id="email" name="email" placeholder="Email"></input>
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Phone</label>
                                <input type="input" className="form-control" id="phone" name="phone" placeholder="Phone"></input>
                            </div>
                        </div>
                        <hr />
                        <p><span className="blue bold">Billing and Shipping</span></p>
                        <div className="row">
                            <div className="col-sm-6">
                                <label className="blue">PO #</label>
                                <input type="input" className="form-control" id="purchase-order" name="purchase-order" placeholder="Purchase Order #"></input>
                            </div>
                            <div className="col-sm-6">
                                
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Billing Account #</label>
                                <input type="input" className="form-control" id="billing-account" name="billing-account" placeholder="Billing Account #"></input>
                            </div>
                            <div className="col-sm-6">
                                
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Billing Address</label>
                                <input type="input" className="form-control" id="billing-address" name="billing-address" placeholder="Address"></input>
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Billing City</label>
                                <input type="input" className="form-control" id="billing-city" name="billing-city" placeholder="City"></input>
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Billing State</label>
                                <input type="input" className="form-control" id="billing-state" name="billing-state" placeholder="State"></input>
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Billing Zip</label>
                                <input type="input" className="form-control" id="billing-zip" name="billing-zip" placeholder="Zip"></input>
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Shipping Account #</label>
                                <input type="input" className="form-control" id="shipping-account" name="shipping-account" placeholder="Shipping Account #"></input>
                            </div>
                            <div className="col-sm-6">
                                
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Shipping Address</label>
                                <input type="input" className="form-control" id="shipping-address" name="shipping-address" placeholder="Address"></input>
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Shipping City</label>
                                <input type="input" className="form-control" id="shipping-city" name="shipping-city" placeholder="City"></input>
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Shipping State</label>
                                <input type="input" className="form-control" id="shipping-state" name="shipping-state" placeholder="State"></input>
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Shipping Zip</label>
                                <input type="input" className="form-control" id="shipping-zip" name="shipping-zip" placeholder="Zip"></input>
                            </div>
                        </div>
                        <hr />
                        <p><span className="blue bold">Patient Information</span></p>
                        <div className="row">
                            <div className="col-sm-6">
                                <label className="blue">Name</label>
                                <input type="input" className="form-control" id="patient-name" name="patient-name" placeholder="Name"></input>
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Need By Date</label>
                                <input type="input" className="form-control" id="need-by-date" name="need-by-date" placeholder="Date"></input>
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Patient's Clinical Diagnosis</label>
                                <input type="input" className="form-control" id="diagnosis" name="diagnosis" placeholder="Diagnosis"></input>
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Surgeries (Type/Date)</label>
                                <input type="input" className="form-control" id="surgeries" name="surgeries" placeholder=""></input>
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Is the patient using an assistive device?</label>   <br />    
                                <input type="checkbox" name="assistive-device" value="brace-kafo"></input> Brace/KAFO<br />      
                                <input type="checkbox" name="assistive-device" value="crutch"></input> Crutch<br />      
                                <input type="checkbox" name="assistive-device" value="cane"></input> Cane<br />      
                                <input type="checkbox" name="assistive-device" value="wheelchair"></input> Wheelchair<br />  
                                <input type="checkbox" name="assistive-device" value="walker"></input> Walker<br />  
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Shoe Sizing</label>   <br />    
                                <input type="checkbox" name="shoe-sizing" value="shoe-shipped"></input> Patient's shoe shipped with cast (preferred)<br />      
                                <input type="checkbox" name="shoe-sizing" value="tracing"></input> Tracing of shoe insole provided with order form<br />      
                                <input type="checkbox" name="shoe-sizing" value="none"></input> Not sending shoe or tracing<br />       
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Cast</label>   <br />    
                                <input type="checkbox" name="cast" value="correct"></input> Negative cast is correct<br />      
                                <input type="checkbox" name="cast" value="incorrect"></input> Negative cast is incorrect<br />       
                            </div>
                            <div className="col-sm-12 hide-if-correct">
                                <label className="blue">Describe</label>
                                <input type="input" className="form-control" id="incorrect-describe" placeholder=""></input>      
                            </div>
                            <div className="col-sm-12 hide-if-correct">
                                <label className="blue">Describe Any Deformity</label>
                                <input type="input" className="form-control" id="incorrect-deformity" placeholder=""></input>      
                            </div>
                            <div className="col-sm-12 hide-if-correct">
                                <label className="blue">Correctable?</label>   <br />    
                                <input type="checkbox" name="correctable" value="yes"></input> Yes<br />      
                                <input type="checkbox" name="correctable" value="no"></input> No<br />       
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Activity Level (Check One)</label>   <br />    
                                <input type="checkbox" name="activity-level" value="limited"></input> Limited Ambulator: sits to stands and transfers<br />      
                                <input type="checkbox" name="activity-level" value="household"></input> Household Ambulator: level surfaces with walking aids<br />      
                                <input type="checkbox" name="activity-level" value="limited-comm"></input> Limited Community Ambulator: level surfaces with walking aids<br />  
                                <input type="checkbox" name="activity-level" value="active-comm"></input> Active Community Ambulator: mild inclines/declines<br />      
                                <input type="checkbox" name="activity-level" value="independent"></input> Independent Ambulator: varied cadence, uneven surfaces, no walking aids<br />      
                                <input type="checkbox" name="activity-level" value="active"></input> Active Ambulator: walking, running, some athletic activity<br />     
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Biomechanical Objectives</label>   <br />    
                                <input type="checkbox" name="objective" value="resist-knee-hyper"></input> Resist Knee Hyperextension in Stance<br />      
                                <input type="checkbox" name="objective" value="resist-knee-flex"></input> Resist Knee Flexion in Stance<br />      
                                <input type="checkbox" name="objective" value="knee-valgus"></input> Knee Valgus Control<br />  
                                <input type="checkbox" name="objective" value="knee-varus"></input> Knee Varus Control<br />      
                                <input type="checkbox" name="objective" value="knee-drawer"></input> Posterior/Anterior Knee Drawer Control<br />      
                                <input type="checkbox" name="objective" value="dorsiflexion"></input> Control Dorsiflexion Weakness<br />    
                                <input type="checkbox" name="objective" value="plantar-flexion"></input> Control Plantar Flexion Weakness<br />      
                                <input type="checkbox" name="objective" value="ankle-valgus"></input> Control Ankle Valgus Instability<br />      
                                <input type="checkbox" name="objective" value="ankle-varus"></input> Control Ankle Varus Instability<br />  
                            </div>
                        </div>
                        <hr />
                        <p><span className="blue bold">Brace Configuration</span></p>
                        <div className="row">
                            <div className="col-sm-6">
                                <label className="blue">Shell Configuration</label>   <br />    
                                <input type="checkbox" name="shell-config" value="anterior"></input> Anterior<br />      
                                <input type="checkbox" name="shell-config" value="posterior"></input> Posterior<br />      
                                <input type="checkbox" name="shell-config" value="hyper-resist"></input> Hyperextension Resist<br />  
                                <input type="checkbox" name="shell-config" value="flex-resist"></input> Flexion Resist<br />      
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Coronal Plane Extension</label>   <br />    
                                <input type="checkbox" name="coronal-plane" value="valgus-resist"></input> Valgus Resist<br />      
                                <input type="checkbox" name="coronal-plane" value="varus-resist"></input> Varus Resist<br />       
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Molded Inner Boot</label>   <br />    
                                <input type="checkbox" name="inner-boot" value="low"></input> Low<br />      
                                <input type="checkbox" name="inner-boot" value="dorsal-wrap"></input> Dorsal Wrap<br />       
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Knee Joint Options</label>   <br />    
                                <input type="checkbox" name="knee-joint" value="single-piv"></input> Single Pivot Locking<br />  
                                <input type="checkbox" name="knee-joint" value="single-piv-free"></input> Single Pivot Locking with Free Motion<br />     
                                <input type="checkbox" name="knee-joint" value="five-bar"></input> 5-Bar Free<br />    
                                <input type="checkbox" name="knee-joint" value="five-bar-lock"></input> 5-Bar Locking<br />  
                                <input type="checkbox" name="knee-joint" value="five-bar-free"></input> 5-Bar Locking with Free Motion<br />     
                            </div>
                            <div className="col-sm-6">
                                <label className="blue">Other Options</label>   <br />    
                                <input type="checkbox" name="options" value="ankle-strap"></input> Include Ankle Strap<br />      
                                <input type="checkbox" name="options" value="bands-posts"></input> Install Extension Assist Bands/Posts<br />       
                            </div>
                        </div>
                        <br />  
                        <button type="submit" className="btn btn-primary">Place Order</button>
                    </form>
                </div>
            </div>
            </>
        }
        />    
        
    );  
}

  export default SpryStepKafo;