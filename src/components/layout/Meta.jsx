import {Helmet} from "react-helmet";
import React from "react";


const Meta = ({title, description, image}) => {
	return (<Helmet>
		<title>{title}</title>
		<meta charSet="utf-8"/>
		<meta name="theme-color" content="#ffffff"/>
		<meta name="description" content={description}/>
		<meta name="title" content={title}/>
		<meta name="site_name" content="TODO"/>

		<meta property="og:title" content={title}/>
		<meta property="og:type" content="website"/>
		<meta property="og:url" content={process.env.APP_URL}/>
		<meta property="og:site_name" content="TODO"/>
		<meta property="og:image" content={image}/>
		<meta property="og:description" content={description}/>
		<meta property="og:locale" content="sv_SE"/>

		<meta name="robots" content="index, follow"/>
		<link rel="canonical" href={process.env.APP_URL}/>
	</Helmet>)
};

export default Meta;