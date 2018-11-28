---
layout: UserGuide
title: CipherLab API Differences
---

# CipherLab API Differences


| Legacy CipherLab API | Airlock Browser API |
|---|---|
`enableKeyboardEmulation` | This property is applied to a web application using `airlock.scanning.setPopulationMethod(populationMethod)`
`autoEnterWay` | `airlock.scanning.getScanInsertMode` and `airlock.scanning.setScanInsertMode`
`autoEnterChar` | See `airlock.scanning.getPreScanKeys`, `airlock.scanning.setPreScanKeys`, `airlock.scanning.getPostScanKeys`, `airlock.scanning.setPostScanKeys`. Note that you can also add a prefix and postfix using `airlock.scanning.setScannedTextPrefix` and ``airlock.scanning.setScannedTextPostfix`
`szCharsetName` of type string | `szCharsetName` is of type int. Valid values are 0 (utf8), 1 (windows1250), 2 (windows1251), 3 (windows1252), 4 (windows1253), 5 (windows1254), 6 (windows1255), 7 (windows1256), 8 (windows1257), 9 (windows1258), 10 (big5), 11 (shift_JIS), 12 (gbk)
`vibrationCounter` | `CipherLabDeviceConfiguration.barcodeSuccessVibrateMS`





