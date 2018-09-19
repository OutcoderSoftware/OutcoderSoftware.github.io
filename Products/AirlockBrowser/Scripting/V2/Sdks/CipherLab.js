
/**
 * @file CipherLab specific APIs for use with Airlock Browser.
 * @version 1.0.6837.1022
 * @copyright Outcoder Sàrl 2018. All Rights Reserved.
 */

 /**
 * The root namespace for CipherLab.
 * @namespace 
 */
var cipherLab = cipherLab || {};

/**
 * @typedef cipherLab.CipherLabDeviceConfiguration
 * @property {number} ledDurationMS Default value is 0.
 * @property {number} beepSound Default value is 0. Valid values are 0 (Default), 1 (Mute), 2 (Alarm2), 3 (Alarm3), 4 (Hwandsw), 5 (LowBattery), 6 (MenuPopup), 7 (MessageBox), 8 (Notify), 9 (VoiceBeep)
 * @property {number} vibrationCount Default value is 1. Valid values are [0, 10]
 * @property {boolean} clearPreviousData Default value is false.
 * @property {boolean} showCodeType Default value is false.
 * @property {boolean} showCodeLength Default value is false.
 * @property {number} characterSet Default value is 0. Valid values are 0 (windows1250), 1 (windows1251), 2 (windows1252), 3 (windows1253), 4 (windows1254), 5 (windows1255), 6 (windows1256), 7 (windows1257), 8 (windows1258), 9 (big5), 10 (shift_JIS)
 * @property {string} prefixCode
 * @property {string} suffixCode
 * @property {string} delimiter
 * @property {number} addonSecurityLevel Default value is 10. Valid values are [2, 30]
 * @property {number} laserOnTimeMS Default value is 1000. Valid values are [500, 9900]
 * @property {boolean} projectAimingPattern Default value is true.
 * @property {boolean} decodingIllumination Default value is true.
 * @property {boolean} displayMode Default value is false.
 * @property {number} illuminationPowerLevel Default value is 10. Valid values are [0, 10]
 * @property {number} interCharacterGapSize Default value is 0. Valid values are 0 (Normal), 1 (Large)
 * @property {number} negativeBarcodes Default value is 0. Valid values are 0 (RegularOnly), 1 (InverseOnly), 2 (AutoDetect)
 * @property {boolean} pickListModeEnabled Default value is false.
 * @property {number} presentationUsageTimeOutSeconds Default value is 900. Valid values are [1, 1800]
 * @property {number} redundancyLevel Default value is 0. Valid values are 0 (Level1), 1 (Level2), 2 (Level3), 3 (Level4)
 * @property {number} scanAngleType Default value is 0. Valid values are 0 (Wide), 1 (Narrow)
 * @property {number} scanMode Default value is 0. Valid values are 0 (LevelMode), 1 (ContinuousMode), 2 (PresentationMode), 3 (AutoAimMode)
 * @property {number} securityLevel Default value is 2. Valid values are [0, 3]
 * @property {number} timeoutBetweenSameSymbologyMS Default value is 1000. Valid values are [0, 9900]
 * @property {boolean} transmitCodeIdType Default value is false.
 * @property {number} aimerMode Default value is 0. Valid values are 0 (Typical), 1 (OnePullAimAndRead), 2 (OnePullAimSecondPullRead)
 * @property {boolean} centerDecoding Default value is true.
 * @property {number} centerDecodingTolerance Default value is 0. Valid values are [0, 100]
 * @property {number} transmitCodeIdChar Default value is 0. Valid values are 0 (None), 1 (AimCodeId)
 * @property {number} triggerMode Default value is 0. Valid values are 0 (LevelMode), 1 (ContinuousMode), 2 (PresentationMode), 3 (AutoAimMode)
 * @property {boolean} notifyBarcodeReadSuccessful Default value is true.
 * @property {boolean} notifyBarcodeReadFailed Default value is false.
 * @property {boolean} vibrateUponBarcodeNotification Default value is false.
 */
 
/**
 * CipherLab Barcode Decoders
 * @namespace 
 */
cipherLab.decoders = cipherLab.decoders || {};

/**
 * @typedef cipherLab.decoders.AustralianPostal
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.Aztec
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.Chinese2Of5
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.Codabar
 * @property {number} lengthMin Default value is 4.
 * @property {number} lengthMax Default value is 55.
 * @property {boolean} clsiEditingEnabled Default value is false.
 * @property {number} notisEditingType Default value is 0. Valid values are 0 (None), 1 (ABCDUpper), 2 (AbcdLower)
 * @property {boolean} notisEditingEnabled Default value is true.
 * @property {boolean} transmitCheckDigit Default value is true.
 * @property {number} verifyCheckDigit Default value is 0. Valid values are 0 (None), 1 (Modulo16), 2 (Modulo7DR), 3 (ModuloBoth)
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.Code11
 * @property {number} lengthMin Default value is 4.
 * @property {number} lengthMax Default value is 55.
 * @property {number} numberOfCheckDigits Default value is 0. Valid values are 0 (None), 1 (One), 2 (Two)
 * @property {boolean} transmitCheckDigit Default value is false.
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.Code128
 * @property {number} lengthMin Default value is 4.
 * @property {number} lengthMax Default value is 55.
 * @property {number} securityLevel Default value is 0. Valid values are 0 (High), 1 (Normal)
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.Code39
 * @property {number} lengthMin Default value is 4.
 * @property {number} lengthMax Default value is 55.
 * @property {boolean} convertToCode32 Default value is false.
 * @property {boolean} convertToCode32Prefix Default value is false.
 * @property {boolean} fullAsciiEnabled Default value is false.
 * @property {boolean} verifyCheckDigit Default value is false.
 * @property {boolean} transmitCheckDigit Default value is false.
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.Code93
 * @property {number} lengthMin Default value is 4.
 * @property {number} lengthMax Default value is 55.
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.Composite
 * @property {boolean} c Default value is true.
 * @property {boolean} ab Default value is false.
 * @property {boolean} tlc39Enabled Default value is false.
 * @property {number} mode Default value is 1. Valid values are 0 (UpcNeverLinked), 1 (UpcAlwaysLinked), 2 (AutoDiscriminate)
 * @property {boolean} emulationModeEnabled Default value is false.
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.UccCoupon
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.DataMatrix
 * @property {string} fieldSeparator
 * @property {number} mirrorImage Default value is 0. Valid values are 0 (Never), 1 (Always), 2 (Auto)
 * @property {string} applicationIdentifierMark1
 * @property {string} applicationIdentifierMark2
 * @property {boolean} applicationIdentifierEnabled Default value is false.
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.DutchPostal
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.Ean13
 * @property {number} addon2 Default value is 0. Valid values are 0 (IgnoresAddon), 1 (AutoDiscriminate)
 * @property {number} addon5 Default value is 0. Valid values are 0 (IgnoresAddon), 1 (AutoDiscriminate)
 * @property {number} booklandIsbnFormat Default value is 0. Valid values are 0 (Isbn10), 1 (Isbn13)
 * @property {boolean} convertToIsbn Default value is false.
 * @property {boolean} convertToIssn Default value is false.
 * @property {boolean} transmitCheckDigit Default value is true.
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.Ean8
 * @property {number} addon2 Default value is 0. Valid values are 0 (IgnoresAddon), 1 (AutoDiscriminate)
 * @property {number} addon5 Default value is 0. Valid values are 0 (IgnoresAddon), 1 (AutoDiscriminate)
 * @property {boolean} convertToEan13 Default value is false.
 * @property {boolean} transmitCheckDigit Default value is true.
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.Industrial2Of5
 * @property {number} lengthMin Default value is 4.
 * @property {number} lengthMax Default value is 55.
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.JapanPostal
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.UKPostal
 * @property {boolean} transmitCheckDigit Default value is true.
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.Upce1
 * @property {number} addon2 Default value is 0. Valid values are 0 (IgnoresAddon), 1 (AutoDiscriminate)
 * @property {number} addon5 Default value is 0. Valid values are 0 (IgnoresAddon), 1 (AutoDiscriminate)
 * @property {boolean} convertToUpca Default value is false.
 * @property {number} preamble Default value is 10. Valid values are 0 (None), 10 (SystemCharacter), 20 (SystemCharacterAndCtyCode)
 * @property {boolean} transmitCheckDigit Default value is true.
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.GS1128
 * @property {string} applicationIdentifierMark1
 * @property {string} applicationIdentifierMark2
 * @property {boolean} applicationIdentifierEnabled Default value is false.
 * @property {string} fieldSeparator
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.GS1DataBar14
 * @property {boolean} convertToUpcEan Default value is false.
 * @property {number} securityLevel Default value is 1. Valid values are [0, 3]
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.GS1DataBarExpanded
 * @property {number} securityLevel Default value is 1. Valid values are [0, 3]
 * @property {string} fieldSeparator
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.GS1DataBarLimited
 * @property {boolean} convertToUpcEan Default value is false.
 * @property {number} securityLevel Default value is 3. Valid values are [1, 4]
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.Interleaved2Of5
 * @property {number} lengthMin Default value is 4.
 * @property {number} lengthMax Default value is 55.
 * @property {number} checkDigitVerification Default value is 0. Valid values are 0 (Disable), 1 (Uss), 2 (Opcc)
 * @property {boolean} convertToEan13 Default value is false.
 * @property {boolean} transmitCheckDigit Default value is false.
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.Isbt128
 * @property {number} concatenation Default value is 2. Valid values are 0 (Disable), 1 (Enable), 2 (Auto)
 * @property {number} concatenationRedundancy Default value is 10.
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.Korean3Of5
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.Matrix2Of5
 * @property {number} lengthMin Default value is 4.
 * @property {number} lengthMax Default value is 55.
 * @property {boolean} verifyCheckDigit Default value is false.
 * @property {boolean} transmitCheckDigit Default value is false.
 * @property {boolean} redundancyEnabled Default value is false.
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.MaxiCode
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.MicroPdf417
 * @property {boolean} code128Emulation Default value is false.
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.MicroQR
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.Msi
 * @property {number} lengthMin Default value is 4.
 * @property {number} lengthMax Default value is 55.
 * @property {number} checkDigitAlgorithm Default value is 0. Valid values are 0 (Modulo1011), 1 (DoubleModulo10)
 * @property {number} checkDigitOption Default value is 0. Valid values are 0 (OneDigit), 1 (TwoDigits)
 * @property {boolean} transmitCheckDigit Default value is true.
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.Pdf417
 * @property {number} transmitMode Default value is 0. Valid values are 0 (PassThroughAllSymbols), 1 (BufferAllSymbols), 2 (TransmitAnySymbolInSet)
 * @property {boolean} escapeCharacterEnabled Default value is true.
 * @property {boolean} transmitControlHeader Default value is true.
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.Plessey
 * @property {number} lengthMin Default value is 4.
 * @property {number} lengthMax Default value is 55.
 * @property {boolean} transmitCheckDigit Default value is true.
 * @property {boolean} unconventionalStop Default value is true.
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.QRCode
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.Telepen
 * @property {number} lengthMin Default value is 4.
 * @property {number} lengthMax Default value is 55.
 * @property {number} telepenFormat Default value is 0. Valid values are 0 (Ascii), 1 (Numeric)
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.TriopticCode39
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.Upca
 * @property {number} addon2 Default value is 0. Valid values are 0 (IgnoresAddon), 1 (AutoDiscriminate)
 * @property {number} addon5 Default value is 0. Valid values are 0 (IgnoresAddon), 1 (AutoDiscriminate)
 * @property {boolean} convertToEan13 Default value is false.
 * @property {number} preamble Default value is 10. Valid values are 0 (None), 10 (SystemCharacter), 20 (SystemCharacterAndCtyCode)
 * @property {boolean} transmitCheckDigit Default value is true.
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.Upce0
 * @property {number} addon2 Default value is 0. Valid values are 0 (IgnoresAddon), 1 (AutoDiscriminate)
 * @property {number} addon5 Default value is 0. Valid values are 0 (IgnoresAddon), 1 (AutoDiscriminate)
 * @property {boolean} convertToUpca Default value is false.
 * @property {number} preamble Default value is 10. Valid values are 0 (None), 10 (SystemCharacter), 20 (SystemCharacterAndCtyCode)
 * @property {boolean} transmitCheckDigit Default value is true.
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.UpuFicsPostal
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.USPostal
 * @property {boolean} planetEnabled Default value is true.
 * @property {boolean} postnetEnabled Default value is true.
 * @property {boolean} transmitCheckDigit Default value is true.
 * @property {boolean} enabled Default value is true.
 */

 /**
 * @typedef cipherLab.decoders.UspsPostal
 * @property {boolean} enabled Default value is true.
 */

 

 