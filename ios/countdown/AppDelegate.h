// Copyright 2015-present 650 Industries. All rights reserved.

#import <UIKit/UIKit.h>

@protocol OIDAuthorizationFlowSession;

@interface AppDelegate : UIResponder <UIApplicationDelegate>
@property(nonatomic, strong, nullable) id<OIDAuthorizationFlowSession> currentAuthorizationFlow;
@property (strong, nonatomic) UIWindow *window;


@end

