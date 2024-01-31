import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layouts/Layout";
import Image from "next/image";

const ErrorPage = () => {
    return (
        <Layout showFooter={false}>
            <Head>
                <title>404 Page Not Found</title>
            </Head>

            <main className="page-wrapper page-error">
                <div className="axil-error-not-found fullscreen d-flex align-items-center theme-gradient-7 list-active">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="axil-error text-center">
                                    <div className="inner">
                                        <h1>Oops! Page Not Found</h1>
                                        <p className="subtitle-2 mb--30">
                                            Looks like you've wandered off course. Here's what you can do:
                                        </p>
                                        <ul>
                                            <p>&diams;   Double-check the URL for typos.</p>
                                            <p>&diams;   Return to our <Link href="/"><a>homepage</a></Link> and navigate from there.</p>
                                            <p>&diams;   If you found a broken link on our site, <Link href="/contact"><a>let us know</a></Link>.</p>
                                        </ul>
                                        <p>Need help? <Link href="/contact"><a>Contact us</a></Link> anytime!</p>
                                        <p>Warm regards, Expert Sud Team</p>
                                        <Link href="/">
                                            <a className="axil-button btn-large btn-transparent">
                                                <span className="button-text">Go Back</span>
                                                <span className="button-icon"/>
                                            </a>
                                        </Link>
                                        <div className="text-image">
                                            <Image
                                                width={860}
                                                height={378}
                                                src="/images/others/404.svg"
                                                alt="404 Images"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape-group">
                        <div className="shape shape-01">
                            <Image width={67} height={28} src="/images/shape/404-01.svg" alt="Shape Images"/>
                        </div>
                        <div className="shape shape-02">
                            <Image width={67} height={28} src="/images/shape/404-01.svg" alt="Shape Images"/>
                        </div>
                        <div className="shape shape-03">
                            <Image width={1920} height={761} src="/images/shape/404-02.svg" alt="Shape Images"/>
                        </div>
                        <div className="shape shape-04">
                            <Image width={546} height={413} src="/images/shape/404-03.svg" alt="Shape Images"/>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default ErrorPage;
