/**
 * @file Zebra specific APIs for use with Airlock Browser.
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
 * The root namespace for Zebra specific APIs.
 * @namespace 
 */
airlock.sdks.zebra = airlock.sdks.zebra || {};

/**
 * @typedef airlock.sdks.zebra.EmdkDeviceConfiguration
 * @property {boolean} enableIlluminationMode=true 		
 * @property {number} viewFinderMode=1 Valid values are 0 (Enabled), 1 (StaticReticle).		
 * @property {number} viewfinderOffsetX=0 		
 * @property {number} viewfinderOffsetY=0 		
 * @property {number} viewfinderSize=0 		
 * @property {boolean} continuousReadContinuousReadEnabled=false 		
 * @property {number} continuousReadDifferentSymbolTimeoutMS=500 		
 * @property {number} continuousReadSameSymbolTimeoutMS=500 		
 * @property {boolean} adaptiveScanningEnabled=true 		
 * @property {number} beamWidth=0 Valid values are 0 (Normal), 1 (Narrow), 2 (Wide).		
 * @property {number} powerMode=0 Valid values are 0 (Optimized), 1 (High), 2 (Low), 3 (AlwaysOn).		
 * @property {number} decodeAudioFeedbackMode=0 Valid values are 0 (Both), 1 (Disable), 2 (Local), 3 (Remote).		
 * @property {number} audioStreamType=0 Valid values are 0 (Alarms), 1 (Media), 2 (Ringer).		
 * @property {string} decodeAudioFeedbackUri=content://media/internal/audio/media/88 		
 * @property {boolean} decodeLedFeedback=false 		
 * @property {number} decodeLedFeedbackMode=0 Valid values are 0 (Both), 1 (Disable), 2 (Local), 3 (Remote).		
 * @property {number} decodeLedTimeMS=75 		
 * @property {number} beamTimerMS=15000 		
 * @property {number} inverse1DMode=1 Valid values are 0 (Auto), 1 (Disabled), 2 (Enabled).		
 * @property {boolean} enableLcdMode=false 		
 * @property {number} linearSecurityLevel=3 Valid values are 0 (AllThrice), 1 (AllTwice), 2 (LongAndShort), 3 (ShortOrCodabar).		
 * @property {number} lowPowerTimeout=250 		
 * @property {number} codeIdType=0 Valid values are 0 (None), 1 (AIM), 2 (Symbol).		
 * @property {number} aimTimerMS=500 		
 * @property {number} aimType=4 Valid values are 0 (ContinuousRead), 1 (PressAndRelease), 2 (TimedHold), 3 (TimedRelease), 4 (Trigger).		
 * @property {number} differentSymbolTimeoutMS=500 		
 * @property {number} illuminationMode=0 Valid values are 0 (On), 1 (Off).		
 * @property {number} oneDQuietZoneLevel=1 Valid values are 0 (Level0), 1 (Level1), 2 (Level2), 3 (Level3).		
 * @property {number} picklistEx=0 Valid values are 0 (Disabled), 1 (Hardware), 2 (Software).		
 * @property {number} poorQualityDecodeEffortLevel=0 Valid values are 0 (Level0), 1 (Level1), 2 (Level2), 3 (Level3).		
 * @property {number} sameSymbolTimeoutMS=500 		
 * @property {number} aimingPattern=0 Valid values are 0 (On), 1 (Off).		
 * @property {number} connectionIdleTimeSeconds=600 		
 * @property {number} illuminationBrightness=10 		
 * @property {boolean} notifyBarcodeReadSuccessful=true 		
 * @property {boolean} notifyBarcodeReadFailed=false 		
 * @property {boolean} barcodeVibrate=true 		
 * @property {number} barcodeSuccessVibrateMS=true Valid values are [1, 1500].		
 */
 
/**
 * Zebra Barcode Decoders
 * @namespace 
 */
 airlock.sdks.zebra.decoders =  airlock.sdks.zebra.decoders || {};

/**
 * @typedef airlock.sdks.zebra.decoders.Aztec
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.Chinese2Of5
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.CodaBar
 * @property {bool} clsiEditing 		
 * @property {bool} notisEditing 		
 * @property {number} length1=6 		
 * @property {number} length2=55 		
 * @property {bool} redundancy=true 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.Code11
 * @property {bool} reportCheckDigit=false 		
 * @property {object} verifyCheckDigit=1 		
 * @property {number} length1=4 		
 * @property {number} length2=55 		
 * @property {bool} redundancy=true 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.Code128
 * @property {bool} checkIsbtTable=false 		
 * @property {bool} enableEan128=true 		
 * @property {bool} enableIsbt128=true 		
 * @property {bool} enablePlain=true 		
 * @property {object} isbt128ConcatMode=2 		
 * @property {bool} reducedQuietZone=false 		
 * @property {object} securityLevel=1 		
 * @property {number} length1=0 		
 * @property {number} length2=55 		
 * @property {bool} redundancy=false 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.Code39
 * @property {bool} fullAscii=false 		
 * @property {bool} reducedQuietZone=false 		
 * @property {bool} reportCheckDigit=false 		
 * @property {bool} reportCode32Prefix=false 		
 * @property {object} securityLevel=1 		
 * @property {bool} verifyCheckDigit=false 		
 * @property {bool} convertToCode32=false 		
 * @property {number} length1=0 		
 * @property {number} length2=55 		
 * @property {bool} redundancy=false 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.Code93
 * @property {number} length1=0 		
 * @property {number} length2=55 		
 * @property {bool} redundancy=false 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.CompositeAB
 * @property {object} uccLinkMode=0 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.CompositeC
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.DataMatrix
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.Discrete2Of5
 * @property {number} length1=0 		
 * @property {number} length2=14 		
 * @property {bool} redundancy=true 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.Ean13
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.Ean8
 * @property {bool} convertToEan13=false 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.GS1DataBar
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.GS1DataBarExpanded
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.GS1DataBarLimited
 * @property {object} securityLevel=1 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.HanXin
 * @property {object} hanXinInverse=1 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.Interleaved2Of5
 * @property {bool} convertToEan13=false 		
 * @property {bool} reducedQuietZone=false 		
 * @property {bool} reportCheckDigit=false 		
 * @property {object} securityLevel=1 		
 * @property {object} verifyCheckDigit=0 		
 * @property {number} length1=14 		
 * @property {number} length2=10 		
 * @property {bool} redundancy=true 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.Korean3Of5
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.Mailmark
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.Matrix2Of5
 * @property {bool} reportCheckDigit=true 		
 * @property {bool} verifyCheckDigit=true 		
 * @property {number} length1=10 		
 * @property {number} length2=0 		
 * @property {bool} redundancy=false 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.MaxiCode
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.MicroPdf
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.MicroQR
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.Msi
 * @property {object} checkDigits=0 		
 * @property {object} checkDigitScheme=1 		
 * @property {bool} reportCheckDigit=false 		
 * @property {number} length1=4 		
 * @property {number} length2=55 		
 * @property {bool} redundancy=true 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.Pdf417
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.PostalAustralia
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.PostalCanada
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.PostalDutch
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.PostalJapan
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.PostalUK
 * @property {bool} reportCheckDigit=false 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.QRCode
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.Signature
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.Tlc39
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.Trioptic39
 * @property {bool} redundancy=true 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.Upca
 * @property {object} preamble=2 		
 * @property {bool} reportCheckDigit=true 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.Upce0
 * @property {bool} convertToUpca=false 		
 * @property {object} preamble=0 		
 * @property {bool} reportCheckDigit=false 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.Upce1
 * @property {bool} convertToUpca=false 		
 * @property {object} preamble=0 		
 * @property {bool} reportCheckDigit=false 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.US4State
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.US4StateFics
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.USPlanet
 * @property {bool} reportCheckDigit=false 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.zebra.decoders.USPostnet
 * @property {bool} reportCheckDigit=false 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 

 