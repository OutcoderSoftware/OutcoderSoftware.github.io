/**
 * @file Honeywell specific APIs for use with Airlock Browser.
 * @version 1.0.7146.27622
 * @copyright Outcoder Sàrl 2019. All Rights Reserved.
 */

 /**
 * Airlock Browser's root namespace.
 * @namespace 
 * @see <a href="../../Airlock/airlock.html">airlock</a>
 */
 airlock = airlock || {};

 /**
 * Contains device SDK specific APIs.
 * @namespace 
 */
 airlock.sdks = airlock.sdks || {};

 /**
 * The root namespace for Honeywell specific APIs.
 * @namespace 
 */
airlock.sdks.honeywell = airlock.sdks.honeywell || {};

/**
 * @typedef airlock.sdks.honeywell.HoneywellDeviceConfiguration
 * @property {boolean} centerDecode=false 		
 * @property {number} decodeWindowTop=50 		
 * @property {number} decodeWindowBottom=50 		
 * @property {number} decodeWindowLeft=50 		
 * @property {number} decodeWindowRight=50 		
 * @property {number} imagerExposure=4800 		
 * @property {number} imagerExposureMode=3 Valid values are 0 (Fixed), 1 (AutoSensor), 2 (AutoExposure), 3 (ContextSensitive).		
 * @property {number} imagerIlluminationIntensity=100 		
 * @property {number} imagerGain=1024 		
 * @property {number} imagerMaximumExposureTimeUS=60000 		
 * @property {number} imagerMaximumGain=1024 		
 * @property {number} imagerRejectionLimit=5 		
 * @property {number} imagerSamplingMethod=2 Valid values are 0 (Uniform), 1 (Center), 2 (CenterWeighted).		
 * @property {number} imagerTargetAcceptableOffset=40 		
 * @property {number} imageTargetPercentile=97 		
 * @property {number} imagerTargetValue=100 		
 * @property {string} barcodePrefix 		
 * @property {string} barcodeSuffix 		
 * @property {number} symbologyPrefix=0 Valid values are 0 (None), 1 (Honeywell), 2 (Aim).		
 * @property {number} imagerTriggerDelay=0 		
 * @property {boolean} notifyBarcodeReadSuccessful=true 		
 * @property {boolean} notifyBarcodeReadFailed=false 		
 * @property {boolean} barcodeVibrate=true 		
 * @property {number} barcodeSuccessVibrateMS=true Valid values are [1, 1500].		
 */
 
/**
 * Honeywell Barcode Decoders
 * @namespace 
 */
 airlock.sdks.honeywell.decoders =  airlock.sdks.honeywell.decoders || {};

/**
 * @typedef airlock.sdks.honeywell.decoders.Aztec
 * @property {number} minimumLength=1 		
 * @property {number} maximumLength=3832 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Codabar
 * @property {object} checkDigitMode=0 		
 * @property {bool} concatEnabled=false 		
 * @property {bool} startStopTransmitEnabled=false 		
 * @property {number} minimumLength=2 		
 * @property {number} maximumLength=60 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.CodablockA
 * @property {number} minimumLength=0 		
 * @property {number} maximumLength=2048 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.CodablockF
 * @property {number} minimumLength=0 		
 * @property {number} maximumLength=2048 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Code11
 * @property {object} checkDigitMode=2 		
 * @property {number} minimumLength=1 		
 * @property {number} maximumLength=80 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Code128
 * @property {number} minimumLength=0 		
 * @property {number} maximumLength=80 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Code39
 * @property {bool} base32Enabled=false 		
 * @property {object} checkDigitMode=0 		
 * @property {bool} fullAsciiEnabled=false 		
 * @property {bool} startStopTransmitEnabled=false 		
 * @property {number} minimumLength=0 		
 * @property {number} maximumLength=48 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Code93
 * @property {number} minimumLength=0 		
 * @property {number} maximumLength=80 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Composite
 * @property {number} minimumLength=1 		
 * @property {number} maximumLength=300 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Datamatrix
 * @property {number} minimumLength=1 		
 * @property {number} maximumLength=3116 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Ean13
 * @property {bool} addendaRequired=false 		
 * @property {bool} addendaSeparatorEnabled=false 		
 * @property {bool} checkDigitTransmit=false 		
 * @property {bool} fiveCharAddendaEnabled=false 		
 * @property {bool} twoCharAddendaEnabled=false 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Ean8
 * @property {bool} addendaRequired=false 		
 * @property {bool} addendaSeparatorEnabled=false 		
 * @property {bool} checkDigitTransmit=false 		
 * @property {bool} fiveCharAddendaEnabled=false 		
 * @property {bool} twoCharAddendaEnabled=false 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.GS1128
 * @property {number} minimumLength=0 		
 * @property {number} maximumLength=80 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.HaxXin
 * @property {number} minimumLength=1 		
 * @property {number} maximumLength=6000 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Iata25
 * @property {number} minimumLength=4 		
 * @property {number} maximumLength=80 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Interleaved25
 * @property {object} checkDigitMode 		
 * @property {number} minimumLength=2 		
 * @property {number} maximumLength=80 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Isbt128
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Matrix25
 * @property {number} minimumLength=4 		
 * @property {number} maximumLength=80 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Maxicode
 * @property {number} minimumLength=1 		
 * @property {number} maximumLength=150 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.MicroPdf417
 * @property {number} minimumLength=1 		
 * @property {number} maximumLength=2750 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Msi
 * @property {object} checkDigitMode=0 		
 * @property {number} minimumLength=4 		
 * @property {number} maximumLength=48 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Pdf417
 * @property {number} minimumLength=1 		
 * @property {number} maximumLength=2750 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.PostalChina
 * @property {number} minimumLength=4 		
 * @property {number} maximumLength=80 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.PostalKorean
 * @property {number} minimumLength=4 		
 * @property {number} maximumLength=48 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.QRCode
 * @property {number} minimumLength=1 		
 * @property {number} maximumLength=7089 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Rss
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.RssExpanded
 * @property {number} minimumLength=1 		
 * @property {number} maximumLength=80 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.RssLimited
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Standard25
 * @property {number} minimumLength=4 		
 * @property {number} maximumLength=48 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Telepen
 * @property {bool} oldStyleEnabled=false 		
 * @property {number} minimumLength=1 		
 * @property {number} maximumLength=60 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Tlc39
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Trioptic
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Upca
 * @property {bool} addendaRequired=false 		
 * @property {bool} addendaSeparatorEnabled=false 		
 * @property {bool} checkDigitTransmitEnabled=false 		
 * @property {bool} combineCouponCodeModeEnabled=false 		
 * @property {bool} couponCodeModeEnabled=false 		
 * @property {bool} fiveCharAddendaEnabled=false 		
 * @property {bool} numberSystemTransmitEnabled=true 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.honeywell.decoders.Upce
 * @property {bool} addendaRequired=false 		
 * @property {bool} addendaSeparatorEnabled=false 		
 * @property {bool} checkDigitTransmitEnabled=false 		
 * @property {bool} e1Enabled=false 		
 * @property {bool} expandToUpcA=false 		
 * @property {bool} fiveCharAddendaEnabled=false 		
 * @property {bool} numberSystemTransmitEnabled=true 		
 * @property {bool} twoCharAddendaEnabled=false 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 

 