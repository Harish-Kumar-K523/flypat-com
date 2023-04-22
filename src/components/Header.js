import React from "react";
import ReactDOM from "react-dom"

export default function(){
    return(
    <div>
        <div class="menu toggle">
                <div class="titles">Solutions</div>
                    <div class="nav-item" data-id="hospitalOwners">
                        <i class="fas fa-hospital"></i>Hospital Owners
                    </div>
                    <div class="nav-item" data-id="labOwners"><i class="fas fa-flask"></i> Lab Owners
                    </div>
                    <div class="nav-item" data-id="pharmacyOwners">
                        <i class="fas fa-solid fa-prescription-bottle-medical"></i>
                    Pharmacy Owners</div>
                    <div class="titles">Products</div>
                    <div class="nav-item" data-id="launchingSoon">
                        <i class="fas fa-solid fa-rocket l"></i> Launching Soon
                    </div>
                    <div class="nav-item" onclick="location.href ='/careers';">
                        <i class="fas fa-solid fa-briefcase"></i>
                    Careers
                    </div>
        </div>
            <nav id="nav-header">
                <div className="logo">
                    Flypat (img)
                </div>
                <div class="hamberger toggle">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                <ul id="nav-header-ul">
                    <li>
                        <div class="links">Careers</div>
                    </li>
                    <li>
                        <div class="links">
                            Products
                            <i class="fa fa-angle-down"></i>
                            <div class="launch nav-ites">
                                <div class="nav-item launch" data-id="launchingSoon"><i class="fas fa-solid fa-rocket l"></i> Launching
                                Soon</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="links">
                            Solutions
                            <i class="fa fa-angle-down"></i>
                            <div class="nav-items">
                                <div class="nav-item" data-id="hospitalOwners">
                                    <p class="nav-item-title">
                                        For Hospital Owners
                                    </p>
                                    <p class="nav-item-content">
                                        All in one Platform to manage multiple facilities from a single dashboard.
                                    </p>
                                </div>
                                <div class="nav-item" data-id="clinicOwners">
                                    <p class="nav-item-title">
                                        For Clinic Owners
                                    </p>
                                    <p class="nav-item-content">
                                        Giving you the power of technology, connect <br></br> to your patients across <br></br> the globe 24/7.
                                    </p>
                                </div>
                                <div class="nav-item" data-id="labOwners">
                                    <p class="nav-item-title">
                                        For Lab Owners
                                    </p>
                                    <p class="nav-item-content">
                                        Connect seamlessly with your partnered hospitals &amp; clinics serve better.
                                    </p>
                                </div>
                                <div class="nav-item" data-id="pharmacyOwners">
                                    <p class="nav-item-title">
                                        For Pharmacies
                                    </p>
                                    <p class="nav-item-content">
                                        Enabling you to operate as smart pharmacy with real time inventory management.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>       
    )
}