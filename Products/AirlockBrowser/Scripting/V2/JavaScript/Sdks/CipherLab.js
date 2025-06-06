/**
 * @file CipherLab specific APIs for use with Airlock Browser.
 * @version 2.3.5
 * @copyright Outcoder Sàrl 2022. All Rights Reserved.
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
 * The root namespace for CipherLab specific APIs.
 * @namespace 
 */
airlock.sdks.cipherLab = airlock.sdks.cipherLab || {};

/**
 * @typedef airlock.sdks.cipherLab.CipherLabDeviceConfiguration
 * @property {number} ledDuration=0 Valid values are [0, 5000].		
 * @property {number} readerBeep=0 Valid values are 0 (Default), 1 (Mute), 2 (Alarm2), 3 (Alarm3), 4 (Hwandsw), 5 (LowBattery), 6 (MenuPopup), 7 (MessageBox), 8 (Notify), 9 (VoiceBeep).		
 * @property {boolean} clearPreviousData=false 		
 * @property {boolean} showCodeType=false 		
 * @property {boolean} showCodeLen=false 		
 * @property {number} szCharsetName=0 Valid values are 0 (utf8), 1 (windows1250), 2 (windows1251), 3 (windows1252), 4 (windows1253), 5 (windows1254), 6 (windows1255), 7 (windows1256), 8 (windows1257), 9 (windows1258), 10 (big5), 11 (shift_JIS), 12 (gbk).		
 * @property {string} szPrefixCode 		
 * @property {string} szSuffixCode 		
 * @property {string} useDelim 		
 * @property {number} addonSecurityLevel=10 Valid values are [2, 30].		
 * @property {number} laserOnTime=3000 Valid values are [500, 9900].		
 * @property {boolean} decodingAimingPattern=true
 *		A value that specifies whether to project the aiming pattern on every barcode capture. 			
 * @property {boolean} decodingIllumination=true 		
 * @property {boolean} displayMode=false 		
 * @property {number} decodingIlluminationPowerLevel=10 Valid values are [0, 10].		
 * @property {number} interCharGapSize=6
 *		A value that specifies the intercharacter gap size for Code 39 and Codabar, 			
 *		which is typically quite small. Due to various barcode printing technologies, 			
 *		this gap can grow larger than the maximum size allowed and prevent the scan engine 			
 *		from decoding a barcode. If this problem occurs, set it to "Large Intercharacter Gaps" 			
 *		to tolerate these out-of-specification barcodes. 			
 *		Valid values are 6 (Normal), 10 (Large).
  * @property {number} negativeBarcodes=0 Valid values are 0 (RegularOnly), 1 (InverseOnly), 2 (AutoDetect).		
 * @property {boolean} pickListMode=false 		
 * @property {number} timeoutPresentationMode=900000
 *		A value that specifies the minimum time interval between reading two identical barcodes. 			
 *		This helps prevent the scanner from accidentally reading the same barcode twice. 			
 *		This parameter applies to Continuous and Presentation modes. 			
 *		Valid values are [60000, 1800000].
  * @property {number} redundancyLevel=1
 *		A value that specifies decode redundancy. Higher redundancy levels 			
 *		should be selected for deteriorated barcode quality. 			
 *		Valid values are 1 (Level1), 2 (Level2), 3 (Level3), 4 (Level4).
  * @property {number} scanAngle=0 Valid values are 0 (Wide), 1 (Narrow).		
 * @property {number} securityLevel=0 Valid values are [0, 3].		
 * @property {number} timeoutBetweenSameSymbology=1000
 *		A value that specifies the minimum time interval in milliseconds 			
 *		between reading two identical barcodes. This helps prevent the scanner 			
 *		from accidentally reading the same barcode twice. This parameter applies 			
 *		to Continuous and Presentation modes. 			
 *		0 ~ 9900 *1000 (millisecond) 0 ~ 2550 *300 (millisecond) for the EX25 scan engine only 			
 *		Valid values are [0, 9900].
  * @property {number} aimerMode=0 Valid values are 0 (Typical), 1 (OnePullAimAndRead), 2 (OnePullAimSecondPullRead).		
 * @property {boolean} centerDecoding=true 		
 * @property {number} centerDecodingTolerance=0 Valid values are [0, 100].		
 * @property {number} transmitCodeIdChar=0 Valid values are 0 (None), 1 (AimCodeId).		
 * @property {number} triggerMode=0 Valid values are 0 (LevelMode), 1 (ContinuousMode), 2 (PresentationMode), 3 (AutoAimMode).		
 * @property {boolean} triggerPresentationMode=false 		
 * @property {boolean} notifyBarcodeReadSuccessful=true 		
 * @property {boolean} notifyBarcodeReadFailed=false 		
 * @property {boolean} barcodeVibrate=true 		
 * @property {number} barcodeSuccessVibrateMS=true Valid values are [1, 1500].		
 */
 
/**
 * CipherLab Barcode Decoders
 * @namespace 
 */
 airlock.sdks.cipherLab.decoders =  airlock.sdks.cipherLab.decoders || {};

/**
 * @typedef airlock.sdks.cipherLab.decoders.AustralianPostal
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.Aztec
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.Chinese2Of5
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.Codabar
 * @property {number} length1=4
 *		Length qualification *4 (0 ~ 55) 			
 *		Valid values are [0, 55].
  * @property {number} length2=55
 *		Length qualification *55 (0 ~ 55) 			
 *		Valid values are [0, 55].
  * @property {boolean} clsiEditing=false
 *		A value specifying whether to edit CLSI. 			
 * @property {number} notisEditingType=0
 *		A value specifying whether to transform it to NOTIS editing format (Start/Stop characters) 			
 *		and the way it is transformed. 			
 *		Valid values are 0 (None), 1 (ABCDUpper), 2 (AbcdLower).
  * @property {boolean} notisEditing=true
 *		Reserved. 			
 * @property {boolean} transmitCheckDigit=true
 *		A value specifying whether to transmit check digit. 			
 * @property {number} verifyCheckDigit=0
 *		A value specifying whether and how to verify check digit. *None Modulo_16 Modulo_7DR Modulo_Both 			
 *		Note: For Modulo_7DR, the total number of digits in a codabar cannot be greater than '19'; 			
 *		and the first digit in a codabar must be equal to or less than '8'. 			
 *		Valid values are 0 (None), 1 (Modulo16), 2 (Modulo7DR), 3 (ModuloBoth).
  * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.Code11
 * @property {number} length1=4
 *		Length qualification *4 (0 ~ 55) 			
 *		Valid values are [0, 55].
  * @property {number} length2=55
 *		Length qualification *55 (0 ~ 55) 			
 *		Valid values are [0, 55].
  * @property {number} numberOfCheckDigits=0
 *		A value specifying whether and how to verify check digit. 			
 *		Valid values are 0 (None), 1 (One), 2 (Two).
  * @property {boolean} transmitCheckDigit=false
 *		A value specifying whether to transmit check digit. 			
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.Code128
 * @property {number} length1=4
 *		Length qualification *4 (0 ~ 55) 			
 *		Valid values are [0, 55].
  * @property {number} length2=55
 *		Length qualification *55 (0 ~ 55) 			
 *		Valid values are [0, 55].
  * @property {number} securityLevel=0
 *		A value that specifies the decode security level while reading Code128. 			
 *		Valid values are [0, 55].
  * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.Code39
 * @property {number} length1=4
 *		Length qualification *4 (0 ~ 55) 			
 *		Valid values are [0, 55].
  * @property {number} length2=55
 *		Length qualification *55 (0 ~ 55) 			
 *		Valid values are [0, 55].
  * @property {boolean} convertToCode32=false
 *		A value that specifies whether to convert Code 39 to Code 32 (= Italian Pharmacode). 			
 * @property {boolean} convertToCode32Prefix=false
 *		A value that specifies whether to transmit prefix for Code 32 data. 			
 * @property {boolean} fullASCII=false
 *		A value that specifies whether to support Code 39 Full ASCII. 			
 * @property {boolean} checkDigitVerification=false
 *		A value that specifies whether to verify check digit. 			
 * @property {boolean} transmitCheckDigit=false
 *		A value that specifies whether to transmit check digit. 			
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.Code93
 * @property {number} length1=4 Valid values are [0, 55].		
 * @property {number} length2=55 Valid values are [0, 55].		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.Composite
 * @property {boolean} enableCc_C=true 		
 * @property {boolean} enableCc_AB=false 		
 * @property {boolean} enableTlc39=false 		
 * @property {number} enableUpcMode=1 Valid values are 0 (UpcNeverLinked), 1 (UpcAlwaysLinked), 2 (AutoDiscriminate).		
 * @property {boolean} enableEmulationMode=false 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.UccCoupon
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.DataMatrix
 * @property {string} fieldSeparator
 *		A value that specifies whether to apply a field separator of ASCII ranging from 0 to 127. 			
 *		It's set to zero by default. 			
 * @property {number} mirrorImage=0
 *		A value that specifies whether to decode mirror image Data Matrix barcodes. 			
 *		Valid values are 0 (Never), 1 (Always), 2 (Auto).
  * @property {string} applicationIdentifierMark1 		
 * @property {string} applicationIdentifierMark2 		
 * @property {boolean} enableApplicationIdentifier=false 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.DutchPostal
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.Ean13
 * @property {number} addon2=1
 *		A value that specifies the way processing addon2. 			
 *		Valid values are 1 (IgnoresAddon), 2 (AutoDiscriminate).
  * @property {number} addon5=1
 *		A value that specifies the way processing addon5. 			
 *		Valid values are 1 (IgnoresAddon), 2 (AutoDiscriminate).
  * @property {number} booklandISBNFormat=0
 *		If you enabled Bookland EAN, select one of the following formats for Bookland data. 			
 *		Valid values are 0 (Isbn10), 1 (Isbn13).
  * @property {boolean} convertToISBN=false
 *		A value that specifies whether to convert EAN-13 to ISBN. 			
 * @property {boolean} convertToISSN=false
 *		A value that specifies whether to convert EAN-13 to ISSN. 			
 * @property {boolean} transmitCheckDigit=true
 *		A value that specifies whether to transmit check digit. 			
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.Ean8
 * @property {number} addon2=1
 *		A value that specifies the way processing addon2. 			
 *		Valid values are 1 (IgnoresAddon), 2 (AutoDiscriminate).
  * @property {number} addon5=1
 *		A value that specifies the way processing addon5. 			
 *		Valid values are 1 (IgnoresAddon), 2 (AutoDiscriminate).
  * @property {boolean} convertToEan13=false
 *		A value that specifies whether to convert EAN-8 to EAN-13. 			
 * @property {boolean} transmitCheckDigit=true
 *		A value that specifies whether to transmit check digit. 			
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.Industrial2Of5
 * @property {number} length1=4
 *		Length qualification *4 (0 ~ 55) 			
 *		Valid values are [0, 55].
  * @property {number} length2=55
 *		Length qualification *55 (0 ~ 55) 			
 *		Valid values are [0, 55].
  * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.JapanPostal
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.UKPostal
 * @property {boolean} transmitCheckDigit=true 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.Upce1
 * @property {number} addon2=1 Valid values are 1 (IgnoresAddon), 2 (AutoDiscriminate).		
 * @property {number} addon5=1 Valid values are 1 (IgnoresAddon), 2 (AutoDiscriminate).		
 * @property {boolean} convertToUpcA=false 		
 * @property {number} transmitSystemNumber=1 Valid values are 0 (None), 1 (SystemCharacter), 2 (SystemCharacterAndCtyCode).		
 * @property {boolean} transmitCheckDigit=true 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.GS1128
 * @property {string} applicationIdentifierMark1 		
 * @property {string} applicationIdentifierMark2 		
 * @property {boolean} enableApplicationIdentifier=false
 *		A value that specifies whether to enable the application identifier. 			
 * @property {string} fieldSeparator
 *		A value that specifies whether to apply a field separator of ASCII ranging from 0 to 127. 			
 *		It's set to zero by default. 			
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.GS1DataBar14
 * @property {boolean} convertToUpcEan=false
 *		A value that specifies whether to convert RSS to UPC/EAN barcodes. 			
 * @property {number} securityLevel=1
 *		A value that specifies the decode security level while reading GS1 DataBar 14. *1 (0 ~ 3) 			
 *		Valid values are [0, 3].
  * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.GS1DataBarExpanded
 * @property {number} securityLevel=1
 *		A value that specifies the decode security level while reading GS1 DataBar Expanded. *1 (0 ~ 3) 			
 *		Valid values are [0, 3].
  * @property {string} fieldSeparator
 *		A value that specifies whether to apply a field separator of ASCII ranging from 0 to 127. 			
 *		It's set to zero by default. 			
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.GS1DataBarLimited
 * @property {boolean} convertToUpcEan=false
 *		A value that specifies whether to convert RSS to UPC/EAN barcodes. 			
 * @property {number} securityLevel=3
 *		A value that specifies the decode security level while reading GS1 DataBar Limited. *3 (1 ~ 4) 			
 *		Valid values are [1, 4].
  * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.Interleaved2Of5
 * @property {number} length1=4
 *		Length qualification *4 (0 ~ 55) 			
 *		Valid values are [0, 55].
  * @property {number} length2=55
 *		Length qualification *55 (0 ~ 55) 			
 *		Valid values are [0, 55].
  * @property {number} checkDigitVerification=0
 *		A value that specifies whether and how to verify check digit. 			
 *		Valid values are 0 (Disable), 1 (Uss), 2 (Opcc).
  * @property {boolean} convertToEan13=false
 *		A value that specifies whether to convert Interleaved 25 to EAN-13. 			
 * @property {boolean} transmitCheckDigit=false
 *		A value that specifies whether to transmit check digit. 			
 *		It is available only when I20f5CheckDigitVerification is not disabled. 			
 * @property {number} securityLevel=1
 *		A value that specifies the decode security level while reading. 			
 *		Valid values are [0, 3].
  * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.Isbt128
 * @property {number} concatenation=2
 *		A value that specifies whether to decode and concatenate pairs of ISBT barcodes. 			
 *		Valid values are 0 (Disable), 1 (Enable), 2 (Auto).
  * @property {number} concatenationRedundancy=10
 *		A value that specifies concatenation redundancy (2~20 times) when auto-discriminate 			
 *		of ISBT concatenation is enabled. By default, it is set to 10 times. 			
 *		Valid values are [2, 20].
  * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.Korean3Of5
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.Matrix2Of5
 * @property {number} length1=4
 *		Length qualification *4 (0 ~ 55) 			
 *		Valid values are [0, 55].
  * @property {number} length2=55
 *		Length qualification *55 (0 ~ 55) 			
 *		Valid values are [0, 55].
  * @property {boolean} checkDigitVerification=false 		
 * @property {boolean} transmitCheckDigit=false 		
 * @property {boolean} redundancy=false 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.MaxiCode
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.MicroPdf417
 * @property {boolean} code128Emulation=true
 *		A value that specifies whether to enable Code 128 Emulation for certain MicroPDF417 barcodes. 			
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.MicroQR
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.Msi
 * @property {number} length1=4
 *		Length qualification *4 (0 ~ 55) 			
 *		Valid values are [0, 55].
  * @property {number} length2=55
 *		Length qualification *55 (0 ~ 55) 			
 *		Valid values are [0, 55].
  * @property {number} checkDigitAlgorithm=1 Valid values are 1 (Modulo1011), 2 (DoubleModulo10).		
 * @property {number} checkDigitOption=1 Valid values are 1 (OneDigit), 2 (TwoDigits).		
 * @property {boolean} transmitCheckDigit=false 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.Pdf417
 * @property {number} transmitMode=0
 *		A value that specifies how to handle decoding. 			
 *		Valid values are 0 (PassThroughAllSymbols), 1 (BufferAllSymbols), 2 (TransmitAnySymbolInSet).
  * @property {boolean} escapeCharacter=true
 *		A value that specifies whether to use the escape character. 			
 * @property {boolean} transmitControlHeader=true 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.Plessey
 * @property {number} length1=4
 *		Length qualification *0 (0 ~ 55) 			
 *		Valid values are [0, 55].
  * @property {number} length2=55
 *		Length qualification *0 (0 ~ 55) 			
 *		Valid values are [0, 55].
  * @property {boolean} transmitCheckDigit=true
 *		A value that specifies whether to transmit check digit. 			
 * @property {boolean} unconventionalStop=true
 *		A value that specifies whether to enable Plessey unconventional stop. 			
 *		When this function is enabled, Plessey bar codes can be decoded 			
 *		with a stop which is a variation of a standard one (bars are narrower or wider). 			
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.QRCode
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.Telepen
 * @property {number} length1=4
 *		Length qualification *0 (0 ~ 55) 			
 *		Valid values are [0, 55].
  * @property {number} length2=55
 *		Length qualification *0 (0 ~ 55) 			
 *		Valid values are [0, 55].
  * @property {number} format=0
 *		A value that sets output format. "0" represents ASCII, while "1" represents Numeric. 			
 *		Valid values are 0 (Ascii), 1 (Numeric).
  * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.TriopticCode39
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.Upca
 * @property {number} addon2=1 Valid values are 1 (IgnoresAddon), 2 (AutoDiscriminate).		
 * @property {number} addon5=1 Valid values are 1 (IgnoresAddon), 2 (AutoDiscriminate).		
 * @property {boolean} convertToEan13=false 		
 * @property {number} transmitSystemNumber=1 Valid values are 0 (None), 1 (SystemCharacter), 2 (SystemCharacterAndCtyCode).		
 * @property {boolean} transmitCheckDigit=true 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.Upce0
 * @property {number} addon2=1 Valid values are 1 (IgnoresAddon), 2 (AutoDiscriminate).		
 * @property {number} addon5=1 Valid values are 1 (IgnoresAddon), 2 (AutoDiscriminate).		
 * @property {boolean} convertToUpcA=false 		
 * @property {number} transmitSystemNumber=1 Valid values are 0 (None), 1 (SystemCharacter), 2 (SystemCharacterAndCtyCode).		
 * @property {boolean} transmitCheckDigit=true 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.UpuFicsPostal
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.USPostal
 * @property {boolean} enablePlanet=true 		
 * @property {boolean} enablePostnet=true 		
 * @property {boolean} transmitCheckDigit=true 		
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 /**
 * @typedef airlock.sdks.cipherLab.decoders.UspsPostal
 * @property {boolean} enabled=true
 *		Gets or sets a value indicating if the decoder is used to interpret barcodes. 			
 */

 

 