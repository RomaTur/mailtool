import * as React from 'react';
// import { Link } from 'react-router-dom';
import './Templates.css';
import swal from 'sweetalert';

import TemplatePreview from './TemplatePreview/TemplatePreview';
// const arrow = require('./arrow.svg');

const tpl = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title></title>
    <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    /* CONFIG STYLES Please do not delete and edit CSS styles below */


/* IMPORTANT THIS STYLES MUST BE ON FINAL EMAIL */

#outlook a {
    padding: 0;
}

.ExternalClass {
    width: 100%;
}

.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
    line-height: 100%;
}

.es-button {
    mso-style-priority: 100 !important;
    text-decoration: none !important;
}

a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
}

@-ms-viewport {
    width: device-width;
}


/* END OF IMPORTANT */

html,
body {
    width: 100%;
    font-family: 'open sans', 'helvetica neue', helvetica, arial, sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}

table {
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
    border-collapse: collapse;
    border-spacing: 0px;
}

table td,
html,
body,
.es-wrapper {
    padding: 0;
    Margin: 0;
}

.es-content,
.es-header,
.es-footer {
    table-layout: fixed !important;
    width: 100%;
}

img {
    display: block;
    border: 0;
    outline: none;
    text-decoration: none;
    -ms-interpolation-mode: bicubic;
}

table tr {
    border-collapse: collapse;
}

p,
hr {
    Margin: 0;
}

h1,
h2,
h3,
h4,
h5 {
    Margin: 0;
    line-height: 120%;
    mso-line-height-rule: exactly;
    font-family: arial, 'helvetica neue', helvetica, sans-serif;
}

p,
ul li,
ol li,
a {
    -webkit-text-size-adjust: none;
    -ms-text-size-adjust: none;
    mso-line-height-rule: exactly;
}

.es-left {
    float: left;
}

.es-right {
    float: right;
}

.es-p5 {
    padding: 5px;
}

.es-p5t {
    padding-top: 5px;
}

.es-p5b {
    padding-bottom: 5px;
}

.es-p5l {
    padding-left: 5px;
}

.es-p5r {
    padding-right: 5px;
}

.es-p10 {
    padding: 10px;
}

.es-p10t {
    padding-top: 10px;
}

.es-p10b {
    padding-bottom: 10px;
}

.es-p10l {
    padding-left: 10px;
}

.es-p10r {
    padding-right: 10px;
}

.es-p15 {
    padding: 15px;
}

.es-p15t {
    padding-top: 15px;
}

.es-p15b {
    padding-bottom: 15px;
}

.es-p15l {
    padding-left: 15px;
}

.es-p15r {
    padding-right: 15px;
}

.es-p20 {
    padding: 20px;
}

.es-p20t {
    padding-top: 20px;
}

.es-p20b {
    padding-bottom: 20px;
}

.es-p20l {
    padding-left: 20px;
}

.es-p20r {
    padding-right: 20px;
}

.es-p25 {
    padding: 25px;
}

.es-p25t {
    padding-top: 25px;
}

.es-p25b {
    padding-bottom: 25px;
}

.es-p25l {
    padding-left: 25px;
}

.es-p25r {
    padding-right: 25px;
}

.es-p30 {
    padding: 30px;
}

.es-p30t {
    padding-top: 30px;
}

.es-p30b {
    padding-bottom: 30px;
}

.es-p30l {
    padding-left: 30px;
}

.es-p30r {
    padding-right: 30px;
}

.es-p35 {
    padding: 35px;
}

.es-p35t {
    padding-top: 35px;
}

.es-p35b {
    padding-bottom: 35px;
}

.es-p35l {
    padding-left: 35px;
}

.es-p35r {
    padding-right: 35px;
}

.es-p40 {
    padding: 40px;
}

.es-p40t {
    padding-top: 40px;
}

.es-p40b {
    padding-bottom: 40px;
}

.es-p40l {
    padding-left: 40px;
}

.es-p40r {
    padding-right: 40px;
}

.es-menu td {
    border: 0;
}

.es-menu td a img {
    display: inline !important;
}


/* END CONFIG STYLES */

a {
    font-family: 'open sans', 'helvetica neue', helvetica, arial, sans-serif;
    font-size: 14px;
    text-decoration: underline;
}

h1 {
    font-size: 30px;
    font-style: normal;
    font-weight: normal;
    color: #333333;
}

h1 a {
    font-size: 30px;
}

h2 {
    font-size: 24px;
    font-style: normal;
    font-weight: normal;
    color: #333333;
}

h2 a {
    font-size: 24px;
}

h3 {
    font-size: 20px;
    font-style: normal;
    font-weight: bold;
    color: #333333;
}

h3 a {
    font-size: 20px;
}

p,
ul li,
ol li {
    font-size: 14px;
    font-family: 'open sans', 'helvetica neue', helvetica, arial, sans-serif;
    line-height: 150%;
}

ul li,
ol li {
    Margin-bottom: 15px;
}

.es-menu td a {
    text-decoration: none;
    display: block;
}

.es-wrapper {
    width: 100%;
    height: 100%;
    background-image: ;
    background-repeat: repeat;
    background-position: center top;
}

.es-wrapper-color {
    background-color: #f6f6f6;
}

.es-content-body {
    background-color: #ffffff;
}

.es-content-body p,
.es-content-body ul li,
.es-content-body ol li {
    color: #333333;
}

.es-content-body a {
    color: #2cb543;
}

.es-header {
    background-color: transparent;
    background-image: ;
    background-repeat: repeat;
    background-position: center top;
}

.es-header-body {
    background-color: transparent;
}

.es-header-body p,
.es-header-body ul li,
.es-header-body ol li {
    color: #333333;
    font-size: 14px;
}

.es-header-body a {
    color: #1376c8;
    font-size: 14px;
}

.es-footer {
    background-color: transparent;
    background-image: ;
    background-repeat: repeat;
    background-position: center top;
}

.es-footer-body {
    background-color: transparent;
}

.es-footer-body p,
.es-footer-body ul li,
.es-footer-body ol li {
    color: #333333;
    font-size: 14px;
}

.es-footer-body a {
    color: #ffffff;
    font-size: 14px;
}

.es-infoblock,
.es-infoblock p,
.es-infoblock ul li,
.es-infoblock ol li {
    line-height: 120%;
    font-size: 12px;
    color: #cccccc;
}

.es-infoblock a {
    font-size: 12px;
    color: #cccccc;
}

a.es-button {
    border-style: solid;
    border-color: #31cb4b;
    border-width: 10px 20px 10px 20px;
    display: inline-block;
    background: #31cb4b;
    border-radius: 30px;
    font-size: 18px;
    font-family: arial, 'helvetica neue', helvetica, sans-serif;
    font-weight: normal;
    font-style: normal;
    line-height: 120%;
    color: #ffffff;
    text-decoration: none !important;
    width: auto;
    text-align: center;
}

.es-button-border {
    border-style: solid solid solid solid;
    border-color: #2cb543 #2cb543 #2cb543 #2cb543;
    background: #2cb543;
    border-width: 0px 0px 2px 0px;
    display: inline-block;
    border-radius: 30px;
    width: auto;
}


@media only screen and (max-width: 600px) {
    p,
    ul li,
    ol li,
    a {
        font-size: 16px;
    }
    h1 {
        font-size: 30px;
        text-align: center;
    }
    h2 {
        font-size: 26px;
        text-align: center;
    }
    h3 {
        font-size: 20px;
        text-align: center;
    }
    h1 a {
        font-size: 30px;
    }
    h2 a {
        font-size: 26px;
    }
    h3 a {
        font-size: 20px;
    }
    .es-menu td a {
        font-size: 16px !important;
    }
    .es-header-body p,
    .es-header-body ul li,
    .es-header-body ol li,
    .es-header-body a {
        font-size: 16px;
    }
    .es-footer-body p,
    .es-footer-body ul li,
    .es-footer-body ol li,
    .es-footer-body a {
        font-size: 16 px;
    }
    .es-infoblock p,
    .es-infoblock ul li,
    .es-infoblock ol li,
    .es-infoblock a {
        font-size: 12px;
    }
    *[class="gmail-fix"] {
        display: none !important;
    }
    .es-m-txt-c,
    .es-m-txt-c h1,
    .es-m-txt-c h2,
    .es-m-txt-c h3 {
        text-align: center !important;
    }
    .es-m-txt-r,
    .es-m-txt-r h1,
    .es-m-txt-r h2,
    .es-m-txt-r h3 {
        text-align: right !important;
    }
    .es-m-txt-l,
    .es-m-txt-l h1,
    .es-m-txt-l h2,
    .es-m-txt-l h3 {
        text-align: left !important;
    }
    .es-m-txt-r a img,
    .es-m-txt-c a img,
    .es-m-txt-l a img {
        display: inline !important;
    }
    .es-button-border {
        display: block !important;
    }
    .es-button {
        font-size: 20px !important;
        display: block !important;
        border-width: 10px 0px 10px 0px !important;
    }
    .es-btn-fw {
        border-width: 10px 0px !important;
        text-align: center !important;
    }
    .es-adaptive table,
    .es-btn-fw,
    .es-btn-fw-brdr,
    .es-left,
    .es-right {
        width: 100% !important;
    }
    .es-content table,
    .es-header table,
    .es-footer table,
    .es-content,
    .es-footer,
    .es-header {
        width: 100% !important;
        max-width: 600px !important;
    }
    .es-adapt-td {
        display: block !important;
        width: 100% !important;
    }
    .adapt-img {
        width: 100% !important;
        height: auto !important;
    }
    .es-m-p0 {
        padding: 0px !important;
    }
    .es-m-p0r {
        padding-right: 0px !important;
    }
    .es-m-p0l {
        padding-left: 0px !important;
    }
    .es-m-p0t {
        padding-top: 0px !important;
    }
    .es-m-p0b {
        padding-bottom: 0 !important;
    }
    .es-m-p20b {
        padding-bottom: 20px !important;
    }
    .es-hidden {
        display: none !important;
    }
    table.es-table-not-adapt,
    .esd-block-html table {
        width: auto !important;
    }
    table.es-social {
        display: inline-block !important;
    }
    table.es-social td {
        display: inline-block !important;
    }
}


/* END RESPONSIVE STYLES */

.es-p-default {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
}

.es-p-all-default {
    padding: 0px;
}
    </style>
    <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if !mso]><!-- -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet">
    <!--<![endif]-->
</head>

<body>
    <div class="es-wrapper-color">
        <!--[if gte mso 9]>
   <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
      <v:fill type="tile" src="" color="#f6f6f6"></v:fill>
   </v:background>
<![endif]-->
        <table class="es-wrapper" cellspacing="0" cellpadding="0" width="100%">
            <tbody>
                <tr>
                    <td class="esd-email-paddings" valign="top">
                        <table class="es-header esd-footer-popover" cellspacing="0" cellpadding="0" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center">
                                        <table class="es-header-body" cellspacing="0" 
                                        cellpadding="0" width="600" align="center">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p10t es-p25b" align="left">
                                                        <!--[if mso]><table width="600" cellpadding="0" 
                            cellspacing="0"><tr><td width="152" valign="top"><![endif]-->
                                                        <table class="es-left" cellspacing="0" 
                                                        cellpadding="0" align="left">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="es-m-p0r es-m-p20b esd-container-frame" 
                                                                    width="132" align="center">
                                                                        <table cellspacing="0" 
                                                                        cellpadding="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                    class="esd-block-image es-p25t es-p25l" 
                    align="center">
                       <a 
                       target="_blank"> <img class="adapt-img" 
  src="https://demo.stripo.email/content/guids/7815493f-1acd-47ee-9c14-9b4365bfe6e6/images/28481523969731566.png" 
                       alt="LAD" style="display: block;" title="LAD" height="27"> </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                    <td class="es-hidden" width="20"></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td><td width="284" valign="top"><![endif]-->
                                                        <table class="es-left" 
                                                        cellspacing="0" cellpadding="0" align="left">
                                                            <tbody>
                                                                <tr>
                                                                    <td 
                                                                    class="es-m-p20b esd-container-frame"
                                                                     width="284" align="center">
                                                                        <table cellspacing="0" cellpadding="0" 
                                                                        width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="esd-block-text es-p20t" 
                                                                                    align="left">
                                    <p>Мы автоматизируем торговые точки и разрабатываем приложения для бизнеса</p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td><td width="20">
                                                        </td><td width="144" valign="top"><![endif]-->
                                                        <table class="es-right" cellspacing="0" 
                                                        cellpadding="0" align="right">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="esd-container-frame"
                                                                     width="144" align="center">
                                                                        <table cellspacing="0" cellpadding="0"
                                                                         width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                       <td class="esd-block-text es-m-txt-c es-p30t es-p15l" 
                                                                                    align="left">
                           <p><strong><a target="_blank" href="http://kkt365.ru" 
                           style="font-size: 16px; color: #ff0000;">kkt365.ru</a></strong></p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure" align="left" 
                                                    style="background-color: rgb(54, 59, 92);" bgcolor="#363b5c">
                                                        <!--[if mso]><table width="600" cellpadding="0" 
                            cellspacing="0"><tr><td width="199" valign="top"><![endif]-->
                                                        <table cellpadding="0" cellspacing="0" 
                                                        
                                                        class="es-left" align="left">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="199" 
                                           class="es-m-p0r es-m-p20b esd-container-frame" align="center">
                                                                        <table cellpadding="0" 
                                                                        cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                         <td align="center" class="esd-block-text es-p10t es-p5b es-p30r es-p30l">
                                      <p style="font-size: 16px; color: rgb(255, 255, 255);">Онлайн-касса под 54-ФЗ</p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td><td width="199" valign="top"><![endif]-->
                                                        <table cellpadding="0" 
                                                        cellspacing="0" class="es-left" align="left">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="199" 
                                                class="es-m-p20b esd-container-frame" align="center">
                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                    <td align="center" class="esd-block-text es-p10t es-p10b es-p10r es-p10l">
                                     <p style="color: #ffffff; font-size: 16px;">Кабинет для управления бизнесом</p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                              <!--[if mso]></td><td width="0"></td><td width="202" valign="top"><![endif]-->
                          <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                            <tbody>
                                                                <tr>
                          <td width="202" align="center" class="esd-container-frame">
                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                          <td align="center" class="esd-block-text es-p10t es-p20r es-p30l">
                                        <p style="font-size: 16px; color: rgb(255, 255, 255);">Магазин приложений</p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                    <td width="600" class="esd-container-frame" align="center" valign="top">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                                <tr>
                                    <td align="left" class="esd-block-text es-p30t es-p40b es-p30r es-p40l">
                                        <p>Здравствуйете!</p>
<p>'name', прошу вас обратить внимание на наше коммерческое предложение. 
Оно должно идеально подойти для вашей фермерской лавки.</p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure" align="left">
                                                        <!--[if mso]><table width="600" cellpadding="0" 
                            cellspacing="0"><tr><td width="102" valign="top"><![endif]-->
                        <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                            <tbody>
                                                                <tr>
                            <td width="102" class="es-m-p0r es-m-p20b esd-container-frame" align="center">
                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                        <td align="center" class="esd-block-image es-p20t es-p15b es-p15l">
  <a target="_blank"> <img class="adapt-img" 
  src="https://demo.stripo.email/content/guids/7815493f-1acd-47ee-9c14-9b4365bfe6e6/images/32961523971247955.png" 
  alt="" style="display: block;" width="40"> </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td><td width="320" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-left" align="left">
    <tbody>
        <tr>
            <td width="320" class="es-m-p20b esd-container-frame" align="center">
                <table cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                        <tr>
                            <td align="left" class="esd-block-text es-p15t">
                                <p style="font-size: 14px;">Эвотор 7.2</p>
<p style="font-size: 12px; color: #808080;">Это пример довольно таки длинного комментария. 
Из-за того, что он такой длинный, 
он занимает много места, но иногда это даже хорошо. Тут менеджер может подробно описать 
преимущества какого-либо дувайса, исходя из ситуации</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
<!--[if mso]></td><td width="0"></td><td width="178" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-right" align="right">
    <tbody>
        <tr>
            <td width="178" align="center" class="esd-container-frame">
                <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
      <td align="left" class="esd-block-text es-p25t es-p25b es-p30l">
      <p>1 x 18 490 - <span style="color:#808080;">в мес.</span></p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                  <td width="600" class="esd-container-frame" align="center" valign="top">
          <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
          <td align="center" class="esd-block-spacer es-p20t es-p5b es-p40r es-p40l">
                     <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                            <tbody>
                                                                                                <tr>
<td style="border-bottom: 1px solid #cccccc; background:none; height:1px; width:100%; margin:0px 0px 0px 0px;"></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
              <td width="600" class="esd-container-frame" align="center" valign="top">
                <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                        <td align="right" class="esd-block-text es-p35b es-p40r">
<p><span style="color:#808080;">Итого:&nbsp;</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
&nbsp; &nbsp; &nbsp; 46 640.-&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
  <td width="600" class="esd-container-frame" align="center" valign="top">
              <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
            <td align="center" class="esd-block-text es-p20t es-p15b" bgcolor="linear-gradient(90deg, #363B5C -1.5%, 
              #B03253 17.57%, #D14343 34.95%, #B83253 67.48%, #3B3B5C 100%), #FF5151;">
<p style="font-size: 16px; color: rgb(255, 255, 255);">Купите в рассрочку 0-0-6 или получите сертификат на 5000. -</p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure" align="left">
                                                        <!--[if mso]><table width="600" cellpadding="0" 
                            cellspacing="0"><tr><td width="207" valign="top"><![endif]-->
              <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                            <tbody>
                                                                <tr>
            <td width="187" class="es-m-p0r es-m-p20b esd-container-frame" align="center">
                <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
            <td align="left" class="esd-block-text es-p30t es-p10b es-p40l">
                              <p style="line-height: 200%;">Хабибулина Зульфия</p>
    <p style="line-height: 200%;"><a target="_blank" style="line-height: 200%;" 
    href="tel:89040568778"><span style="color:#696969;">+7 904 056 87 78</span> 
    </a><a target="_blank" style="line-height: 200%; color: #0099ff;" 
    href="mailto:habizulf@lad24.ru">habizulf@lad24.ru</a><span style="color:#0099ff;"></span></p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                    <td class="es-hidden" width="20"></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td><td width="187" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-left" align="left">
    <tbody>
        <tr>
            <td width="187" class="es-m-p20b esd-container-frame" align="center">
                <table cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                        <tr>
                            <td align="left" class="esd-block-text">
                                <p><br></p>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" class="esd-block-text es-p40t">
                                <p style="line-height: 200%;"><a target="_blank" style="line-height: 200%; 
                                color: #696969;" href="tel:88007758525">8 800 775 85 25</a><span 
                                style="color:#696969;"></span>&nbsp;<span style="color: #696969; 
                                font-size: 12px;">, доб.</span>&nbsp;3553</p>
                                <p style="line-height: 200%;"><a target="_blank" style="line-height: 200%; 
                                color: #0099ff;" href="http://kkt365.ru">www.kkt365.ru</a><span 
                                style="color:#0099ff;"></span></p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
            <!--[if mso]></td><td width="20"></td><td width="186" valign="top"><![endif]-->
          <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                            <tbody>
                                                                <tr>
                <td width="186" align="center" class="esd-container-frame">
                          <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                          <td align="left" class="esd-block-image es-p40t">
<a target="_blank"> <img class="adapt-img" 
src="https://demo.stripo.email/content/guids/7815493f-1acd-47ee-9c14-9b4365bfe6e6/images/5861523972502015.png" 
alt="" style="display: block;" width="146"> </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure es-p10r es-p25l" align="left">
                                                        <!--[if mso]><table width="565" cellpadding="0" 
                            cellspacing="0"><tr><td width="366" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-left" align="left">
    <tbody>
        <tr>
            <td width="366" class="es-m-p0r es-m-p20b esd-container-frame" valign="top" align="center">
                <table cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                        <tr>
                            <td align="left" class="esd-block-text es-p5t es-p5b es-p40r es-p15l" bgcolor="#ededed">
<p>Используйте промокод «<span style="color:#FF0000;">EVO4567</span>» и получите 1500 рублей при покупке кассы!</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
<!--[if mso]></td><td width="20"></td><td width="179" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" align="right">
    <tbody>
        <tr>
            <td width="179" align="left" class="esd-container-frame">
                <table cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                        <tr>
                            <td align="left" class="esd-block-image es-p5t es-p5b es-p10l">
  <a target="_blank"> <img class="adapt-img" 
  src="https://demo.stripo.email/content/guids/7815493f-1acd-47ee-9c14-9b4365bfe6e6/images/1711523972647936.png" 
  alt="" style="display: block;" height="43"> </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

</html>
`;

// импорт только для разработки, необходимо будет подгружать с сервера
// const templates = require('../../templates.json');

interface TemplatesState {
  templates: any;
}

class Templates extends React.Component<{}, TemplatesState> {
  constructor(props: Object) {
    super(props);
    this.state = {
      templates: []
    };
  }

  componentDidMount() {
   this.fetchTemplates();
  }

  fetchTemplates() {
      if (window.location.hostname === 'localhost') {
        fetch('http://localhost:3004/templates')
          .then((response: any) => {
            return response.json();
          }).then((data: any) => {
            this.setState({
              templates: data.templates
            });
            return data;
          }).catch(() => {
            swal({
              title: 'Не подгрузились данные!',
              icon: 'error',
              timer: 10000
            }).then(() => {
              this.fetchTemplates();
            });
          });
      } else {
        fetch('/templates')
          .then((response: any) => {
            return response.json();
          }).then((data: any) => {
            this.setState({
              templates: data.templates
            });
            return data;
          }).catch(() => {
            swal({
              title: 'Не подгрузились данные!',
              icon: 'error',
              timer: 10000
            }).then(() => {
              this.fetchTemplates();
            });
          });
      }
  }

  render() {

    let templatesPreviewArr: any = [];
    for (let i = 0; i < this.state.templates.length; i++) {
      templatesPreviewArr.push(
        <TemplatePreview
          key={i}
          duration={i}
          title={this.state.templates[i].title}
          desc={this.state.templates[i].description}
          options={this.state.templates[i].options}
          logic={this.state.templates[i].logic}
          templateHtml={tpl}
        />);
    }

    return (
      <div className='templates'>
        {// <Link to='./' className='templates__back'>
         // <img src={arrow} className='templates__back-arrow'/>
        //  <span className='templates__back-text'>Назад</span>
        // </Link> 
        }
        {templatesPreviewArr}
      </div>
    );
  }
}

export default Templates;