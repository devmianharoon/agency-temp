import React from 'react';
import Link from 'next/link';

interface propsType{
    pageTitle:string
}

const Breadcrumb = ({pageTitle}:propsType) => {

  return (
      <div className="breadcrumb-area pt-115 pb-115" style={{ background: "url(assets/img/bg/bg-14.jpg)" }}>
	    <div className="container">
	        <div className="row">
	            <div className="col-xl-12">
	                <div className="breadcrumb-text text-center">
						<h1>{ pageTitle ? pageTitle : 'Blog'}</h1>
	                    <ul className="breadcrumb-menu">
	                        <li><Link href="/" >Home</Link></li>
	                        <li><span>{ pageTitle ? pageTitle : 'Blog'}</span></li>
	                    </ul>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
  );
}

export default Breadcrumb;




