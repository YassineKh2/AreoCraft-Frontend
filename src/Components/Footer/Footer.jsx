import { Footer } from "flowbite-react";
import {  BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export function FooterComponent() {
    return (
        <Footer container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <Footer.Brand
                            src="/imgs/Logo.png"
                            alt="AreoCradt Logo"
                            name="AreoCradt"
                            className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="Get Started"/>
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Weather</Footer.Link>
                                <Footer.Link href="#">Air Pressure</Footer.Link>
                                <Footer.Link href="#">Something else</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="About"/>
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">IEEE AESS ESPRIT</Footer.Link>
                                <Footer.Link href="#">What is AreoCraft</Footer.Link>
                                <Footer.Link href="#">Contributors</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us"/>
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://www.facebook.com/AESSESPRIT">Facebook</Footer.Link>
                                <Footer.Link href="https://www.instagram.com/ieee.aess.esprit/">Instagram</Footer.Link>
                                <Footer.Link href="https://www.linkedin.com/company/ieee-aess-chapter-esprit-student-branch">Linkedin</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider/>
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="https://www.facebook.com/AESSESPRIT" by="IEEE AESS ESPRIT" year={2024}/>
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="https://www.facebook.com/AESSESPRIT" icon={BsFacebook} />
                        <Footer.Icon href="https://www.instagram.com/ieee.aess.esprit/" icon={BsInstagram} />
                        <Footer.Icon href="https://www.linkedin.com/company/ieee-aess-chapter-esprit-student-branch" icon={BsLinkedin} />
                        <Footer.Icon href="https://github.com/YassineKh2/AreoCraft-Frontend" icon={BsGithub} />
                    </div>
                </div>
            </div>
        </Footer>
    );
}
