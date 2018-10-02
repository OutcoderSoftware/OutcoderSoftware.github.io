
/**
 * @file Bluebird specific APIs for use with Airlock Browser.
 * @version 1.0.6849.39184
 * @copyright Outcoder Sàrl 2018. All Rights Reserved.
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
 * The root namespace for Bluebird specific APIs.
 * @namespace 
 */
airlock.sdks.bluebird = airlock.sdks.bluebird || {};

/**
 * @typedef airlock.sdks.bluebird.BluebirdDeviceConfiguration
 * @property {boolean} soundEnabled=true 
 * @property {number} decodeTimeoutMS=3000  Valid values are [500, 10000]
 * @property {number} sameSymbolTimeoutMS=600  Valid values are [0, 10000]
 * @property {number} dataWedgeType=1  Valid values are 0 (Keyboard), 1 (Clipboard)
 * @property {boolean} pickListModeEnabled=false 
 * @property {string} barcodePrefix 
 * @property {string} barcodeSuffix 
 * @property {string} barcodePreamble 
 * @property {string} barcodePostamble 
 * @property {boolean} upceToUpcaConversionEnabled=true 
 * @property {boolean} upce1ToUpcaConversionEnabled=true 
 * @property {number} couponReport=1  Valid values are 0 (OldCouponSymbols), 1 (NewCouponSymbols), 2 (BothCouponFormats)
 * @property {boolean} eanTransmitIssn=true 
 * @property {boolean} code39ToCode32ConversionEnabled=true 
 * @property {boolean} i2of5ToEan13ConversionEnabled=true 
 * @property {number} inverse1D=0  Valid values are 0 (RegularOnly), 1 (InverseOnly), 2 (InverseAutodetect)
 * @property {number} triggerMode=1  Valid values are 0 (Level), 1 (Pulse), 2 (Edge), 3 (Autostand)
 * @property {boolean} aimerModeEnabled=true 
 * @property {boolean} illuminationModeEnabled=true 
 * @property {boolean} notifyBarcodeReadSuccessful=true 
 * @property {boolean} notifyBarcodeReadFailed=false 
 * @property {boolean} vibrateUponBarcodeNotification=false 
 */
 
/**
 * Bluebird Barcode Decoders
 * @namespace 
 */
 airlock.sdks.bluebird.decoders =  airlock.sdks.bluebird.decoders || {};

/**
 * @typedef airlock.sdks.bluebird.decoders.AusPost
 * @property {number} format=0  Valid values are 0 (Autodiscriminate), 1 (RawFormat), 2 (AlphanumericEncoding), 3 (NumericEncoding)
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.Aztec
 * @property {number} inverse=0  Valid values are 0 (RegularOnly), 1 (InverseOnly), 2 (InverseAutodetect)
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.BooklandEan
 * @property {number} format=0  Valid values are 0 (BooklandIsbn10), 1 (BooklandIsbn13)
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.ChinesePost
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.Codabar
 * @property {number} lengthMin=3 
 * @property {number} lengthMax=30 
 * @property {boolean} clsiEditing=true 
 * @property {boolean} notisEditing=true 
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.Code11
 * @property {number} lengthMin=3 
 * @property {number} lengthMax=30 
 * @property {boolean} checkDigitEnabled=false 
 * @property {boolean} checkDigitTransmit=false 
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.Code128
 * @property {number} lengthMin=3 
 * @property {number} lengthMax=30 
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.Code39
 * @property {number} lengthMin=3 
 * @property {number} lengthMax=30 
 * @property {boolean} checkDigitEnabled=false 
 * @property {boolean} checkDigitTransmit=false 
 * @property {boolean} fullAscii=true 
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.Code93
 * @property {number} lengthMin=3 
 * @property {number} lengthMax=30 
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.Composite
 * @property {boolean} c=false 
 * @property {boolean} ab=false 
 * @property {boolean} tLC39=false 
 * @property {number} mode=1  Valid values are 0 (UpcNeverLinked), 1 (UpcAlwaysLinked), 2 (AutoDiscriminate)
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.D2of5
 * @property {number} lengthMin=3 
 * @property {number} lengthMax=30 
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.DataMatrix
 * @property {number} inverse=0  Valid values are 0 (RegularOnly), 1 (InverseOnly), 2 (InverseAutodetect)
 * @property {number} decodeMirrorImages=0  Valid values are 0 (Never), 1 (Always), 2 (Auto)
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.Ean13
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.Ean8
 * @property {boolean} extend=true 
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.Gs1128
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.Gs1Databar
 * @property {boolean} limited=false 
 * @property {boolean} expanded=false 
 * @property {boolean} gs1128EmulationMode=false 
 * @property {boolean} convertToUpcEan=false 
 * @property {number} securityLevel=2  Valid values are 0 (Level1), 1 (Level2), 2 (Level3), 3 (Level4)
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.HanXin
 * @property {number} inverse=0  Valid values are 0 (RegularOnly), 1 (InverseOnly), 2 (InverseAutodetect)
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.I2of5
 * @property {number} lengthMin=3 
 * @property {number} lengthMax=30 
 * @property {boolean} checkDigitEnabled=false 
 * @property {boolean} checkDigitTransmit=false 
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.Isbt128
 * @property {boolean} concatenationEnabled=false 
 * @property {boolean} checkIsbt128Table=true 
 * @property {boolean} concatenationRedundancy=true 
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.JapanesePost
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.KoreanPost
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.Matrix25
 * @property {number} lengthMin=3 
 * @property {number} lengthMax=20 
 * @property {boolean} checkDigitEnabled=false 
 * @property {boolean} checkDigitTransmit=false 
 * @property {boolean} redundancy=false 
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.MaxiCode
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.MicroPdf
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.Msi
 * @property {number} lengthMin=3 
 * @property {number} lengthMax=30 
 * @property {number} checkDigit=0  Valid values are 0 (Check1), 1 (Check2)
 * @property {number} checkDigitAlgorithm=0  Valid values are 0 (Mod10_10), 1 (Mod10_11)
 * @property {boolean} checkDigitTransmit=false 
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.NetherlandsPost
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.Pdf417
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.QRCode
 * @property {number} inverse=0  Valid values are 0 (RegularOnly), 1 (InverseOnly), 2 (InverseAutodetect)
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.Specific
 * @property {number} redundancyLevel=0  Valid values are 0 (Level1), 1 (Level2), 2 (Level3), 3 (Level4)
 * @property {number} securityLevel=1  Valid values are 0 (Level0), 1 (Level1), 2 (Level2), 3 (Level3)
 * @property {number} intercharacterGapSize=0  Valid values are 0 (Six), 1 (A)
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.SupplementalCode
 * @property {number} mode=0  Valid values are 0 (Ignore), 1 (Decode), 2 (Autodiscriminate)
 * @property {number} redundancy=0 
 * @property {boolean} aimIdentifierEnabled=true 
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.TriopticCode39
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.UKPostal
 * @property {boolean} checkDigitTransmit=false 
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.Upca
 * @property {boolean} checkDigitTransmit=false 
 * @property {number} preamble=1  Valid values are 0 (NoPreamble), 1 (CharacterOnly), 2 (CharacterAndCountry)
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.Upce1
 * @property {boolean} checkDigitTransmit=false 
 * @property {number} preamble=1  Valid values are 0 (NoPreamble), 1 (CharacterOnly), 2 (CharacterAndCountry)
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.Upce
 * @property {boolean} checkDigitTransmit=false 
 * @property {number} preamble=1  Valid values are 0 (NoPreamble), 1 (CharacterOnly), 2 (CharacterAndCountry)
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.UpuFicsPostal
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.UserSupplemental
 * @property {boolean} supplementals1=false 
 * @property {boolean} supplementals2=false 
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.USPlanet
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.USPostnet
 * @property {boolean} checkDigitTransmit=false 
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.Usps4State
 * @property {boolean} enabled=true 
 */

 /**
 * @typedef airlock.sdks.bluebird.decoders.MicroQR
 * @property {boolean} enabled=true 
 */

 

 