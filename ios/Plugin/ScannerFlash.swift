import Foundation

@objc public class ScannerFlash: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
