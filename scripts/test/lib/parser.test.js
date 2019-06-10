import test from 'ava';
import { json, dir, trim, cut, iosOnly } from '../../lib/parser';

test('should return JSON format', (t) => {
  const str1 = '{ "a": 1 }';
  const json1 = json(str1);

  t.deepEqual(json1, { a: 1 });
});

test('should return only dir name', (t) => {
  const dir1 = dir('User/superman/file.png');
  const dir2 = dir('/User/batman/');
  const dir3 = dir('/User/wonderwoman');
  const dir4 = dir('/User/_flash');

  t.is(dir1, 'User/superman/');
  t.is(dir2, '/User/batman/');
  t.is(dir3, '/User/wonderwoman/');
  t.is(dir4, '/User/_flash/');
});

test('should return trimmed string', (t) => {
  const superman = trim('superman       ');
  const batman = trim('     batman      ');

  t.is(superman, 'superman');
  t.is(batman, 'batman');
});

test('should return trimmed line', (t) => {
  const hello = trim.line()('hello\n\nworld       ');
  const stream = trim.stream()('hello\n\nworld       ');

  t.is(hello, 'hello\nworld');
  t.deepEqual(stream, ['hello', 'world']);
});

test('should return specific line(s) only', (t) => {
  const cutted1 = cut(1)(['hello', 'world']);
  const cutted2 = cut(2)(['hello', 'world']);

  t.deepEqual(cutted1, ['world']);
  t.deepEqual(cutted2, []);
});

test('should return ios only', (t) => {
  // prettier-ignore
  const json = {
    "devicetypes": [
      {
        "name": "iPhone 4s",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone 4s.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPhone-4s"
      },
      {
        "name": "iPhone 5",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone 5.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPhone-5"
      },
      {
        "name": "iPhone 5s",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone 5s.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPhone-5s"
      },
      {
        "name": "iPhone 6",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone 6.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPhone-6"
      },
      {
        "name": "iPhone 6 Plus",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone 6 Plus.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPhone-6-Plus"
      },
      {
        "name": "iPhone 6s",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone 6s.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPhone-6s"
      },
      {
        "name": "iPhone 6s Plus",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone 6s Plus.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPhone-6s-Plus"
      },
      {
        "name": "iPhone 7",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone 7.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPhone-7"
      },
      {
        "name": "iPhone 7 Plus",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone 7 Plus.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPhone-7-Plus"
      },
      {
        "name": "iPhone 8",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone 8.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPhone-8"
      },
      {
        "name": "iPhone 8 Plus",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone 8 Plus.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPhone-8-Plus"
      },
      {
        "name": "iPhone SE",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone SE.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPhone-SE"
      },
      {
        "name": "iPhone X",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone X.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPhone-X"
      },
      {
        "name": "iPhone Xs",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone Xs.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPhone-XS"
      },
      {
        "name": "iPhone Xs Max",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone Xs Max.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPhone-XS-Max"
      },
      {
        "name": "iPhone Xʀ",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone Xʀ.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPhone-XR"
      },
      {
        "name": "iPad mini (5th generation)",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPad mini (5th generation).simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPad-mini--5th-generation-"
      },
      {
        "name": "iPad Air (3rd generation)",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPad Air (3rd generation).simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPad-Air--3rd-generation-"
      },
      {
        "name": "iPad 2",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPad 2.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPad-2"
      },
      {
        "name": "iPad Retina",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPad Retina.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPad-Retina"
      },
      {
        "name": "iPad Air",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPad Air.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPad-Air"
      },
      {
        "name": "iPad mini 2",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPad mini 2.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPad-mini-2"
      },
      {
        "name": "iPad mini 3",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPad mini 3.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPad-mini-3"
      },
      {
        "name": "iPad mini 4",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPad mini 4.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPad-mini-4"
      },
      {
        "name": "iPad Air 2",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPad Air 2.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPad-Air-2"
      },
      {
        "name": "iPad (5th generation)",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPad (5th generation).simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPad--5th-generation-"
      },
      {
        "name": "iPad Pro (9.7-inch)",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPad Pro (9.7-inch).simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPad-Pro--9-7-inch-"
      },
      {
        "name": "iPad Pro (12.9-inch)",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPad Pro (12.9-inch).simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPad-Pro"
      },
      {
        "name": "iPad Pro (12.9-inch) (2nd generation)",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPad Pro (12.9-inch) (2nd generation).simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPad-Pro--12-9-inch---2nd-generation-"
      },
      {
        "name": "iPad Pro (10.5-inch)",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPad Pro (10.5-inch).simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPad-Pro--10-5-inch-"
      },
      {
        "name": "iPad (6th generation)",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPad (6th generation).simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPad--6th-generation-"
      },
      {
        "name": "iPad Pro (11-inch)",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPad Pro (11-inch).simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPad-Pro--11-inch-"
      },
      {
        "name": "iPad Pro (12.9-inch) (3rd generation)",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPad Pro (12.9-inch) (3rd generation).simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.iPad-Pro--12-9-inch---3rd-generation-"
      },
      {
        "name": "Apple TV",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/AppleTVOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/Apple TV.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.Apple-TV-1080p"
      },
      {
        "name": "Apple TV 4K",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/AppleTVOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/Apple TV 4K.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.Apple-TV-4K-4K"
      },
      {
        "name": "Apple TV 4K (at 1080p)",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/AppleTVOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/Apple TV 4K (at 1080p).simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.Apple-TV-4K-1080p"
      },
      {
        "name": "Apple Watch - 38mm",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/WatchOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/Apple Watch - 38mm.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.Apple-Watch-38mm"
      },
      {
        "name": "Apple Watch - 42mm",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/WatchOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/Apple Watch - 42mm.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.Apple-Watch-42mm"
      },
      {
        "name": "Apple Watch Series 2 - 38mm",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/WatchOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/Apple Watch Series 2 - 38mm.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.Apple-Watch-Series-2-38mm"
      },
      {
        "name": "Apple Watch Series 2 - 42mm",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/WatchOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/Apple Watch Series 2 - 42mm.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.Apple-Watch-Series-2-42mm"
      },
      {
        "name": "Apple Watch Series 3 - 38mm",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/WatchOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/Apple Watch Series 3 - 38mm.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.Apple-Watch-Series-3-38mm"
      },
      {
        "name": "Apple Watch Series 3 - 42mm",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/WatchOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/Apple Watch Series 3 - 42mm.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.Apple-Watch-Series-3-42mm"
      },
      {
        "name": "Apple Watch Series 4 - 40mm",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/WatchOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/Apple Watch Series 4 - 40mm.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.Apple-Watch-Series-4-40mm"
      },
      {
        "name": "Apple Watch Series 4 - 44mm",
        "bundlePath": "/Applications/Xcode.app/Contents/Developer/Platforms/WatchOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/Apple Watch Series 4 - 44mm.simdevicetype",
        "identifier": "com.apple.CoreSimulator.SimDeviceType.Apple-Watch-Series-4-44mm"
      }
    ]
  }
  const obj = iosOnly('devicetypes', 'name')(JSON.stringify(json));

  t.deepEqual(obj, [
    {
      name: 'iPhone 4s',
      bundlePath:
        '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone 4s.simdevicetype',
      identifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-4s'
    },
    {
      name: 'iPhone 5',
      bundlePath:
        '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone 5.simdevicetype',
      identifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-5'
    },
    {
      name: 'iPhone 5s',
      bundlePath:
        '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone 5s.simdevicetype',
      identifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-5s'
    },
    {
      name: 'iPhone 6',
      bundlePath:
        '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone 6.simdevicetype',
      identifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-6'
    },
    {
      name: 'iPhone 6 Plus',
      bundlePath:
        '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone 6 Plus.simdevicetype',
      identifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-6-Plus'
    },
    {
      name: 'iPhone 6s',
      bundlePath:
        '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone 6s.simdevicetype',
      identifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-6s'
    },
    {
      name: 'iPhone 6s Plus',
      bundlePath:
        '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone 6s Plus.simdevicetype',
      identifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-6s-Plus'
    },
    {
      name: 'iPhone 7',
      bundlePath:
        '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone 7.simdevicetype',
      identifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-7'
    },
    {
      name: 'iPhone 7 Plus',
      bundlePath:
        '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone 7 Plus.simdevicetype',
      identifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-7-Plus'
    },
    {
      name: 'iPhone 8',
      bundlePath:
        '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone 8.simdevicetype',
      identifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-8'
    },
    {
      name: 'iPhone 8 Plus',
      bundlePath:
        '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone 8 Plus.simdevicetype',
      identifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-8-Plus'
    },
    {
      name: 'iPhone SE',
      bundlePath:
        '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone SE.simdevicetype',
      identifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-SE'
    },
    {
      name: 'iPhone X',
      bundlePath:
        '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone X.simdevicetype',
      identifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-X'
    },
    {
      name: 'iPhone Xs',
      bundlePath:
        '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone Xs.simdevicetype',
      identifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-XS'
    },
    {
      name: 'iPhone Xs Max',
      bundlePath:
        '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone Xs Max.simdevicetype',
      identifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-XS-Max'
    },
    {
      name: 'iPhone Xʀ',
      bundlePath:
        '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/CoreSimulator/Profiles/DeviceTypes/iPhone Xʀ.simdevicetype',
      identifier: 'com.apple.CoreSimulator.SimDeviceType.iPhone-XR'
    }
  ]);
});
