$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/cardissue/AdminCardUpdate.feature");
formatter.feature({
  "name": "Updating the Card status by admin",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "Updating the card status to inactive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am changing the status with the following details:",
  "rows": [
    {
      "cells": [
        "referenceNumber",
        "6539518357"
      ]
    },
    {
      "cells": [
        "cardStatus",
        "2"
      ]
    },
    {
      "cells": [
        "reason",
        "1"
      ]
    },
    {
      "cells": [
        "remarks",
        "Test"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardUpdateStepDefs.iAmChangingTheStatusWithTheFollowingDetails(DataTable)"
});
formatter.result({
  "error_message": "java.net.UnknownHostException: apitest.pineperks.innull\r\n\tat java.net.Inet6AddressImpl.lookupAllHostAddr(Native Method)\r\n\tat java.net.InetAddress$2.lookupAllHostAddr(InetAddress.java:929)\r\n\tat java.net.InetAddress.getAddressesFromNameService(InetAddress.java:1324)\r\n\tat java.net.InetAddress.getAllByName0(InetAddress.java:1277)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1193)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1127)\r\n\tat org.apache.http.impl.conn.SystemDefaultDnsResolver.resolve(SystemDefaultDnsResolver.java:45)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.resolveHostname(DefaultClientConnectionOperator.java:262)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:161)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2141)\r\n\tat io.restassured.internal.http.HTTPBuilder.post(HTTPBuilder.java:349)\r\n\tat io.restassured.internal.http.HTTPBuilder$post$3.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:136)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1274)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:98)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1225)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:822)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:152)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat com.qc.BaseAPI$logFilter.filter(BaseAPI.java:165)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1744)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:98)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1225)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:822)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:57)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1750)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:98)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1225)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:822)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:57)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:157)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:175)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat com.qc.BaseAPI.postAPI(BaseAPI.java:79)\r\n\tat pl.rest.service.CardUpdate.adminCardUpdate(CardUpdate.java:37)\r\n\tat pl.rest.stepDefs.CardUpdateStepDefs.iAmChangingTheStatusWithTheFollowingDetails(CardUpdateStepDefs.java:49)\r\n\tat ✽.i am changing the status with the following details:(classpath:features/cardissue/AdminCardUpdate.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "remarks",
        "Test"
      ]
    },
    {
      "cells": [
        "responseCode",
        "0"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "referenceNumber",
        "6539518357"
      ]
    },
    {
      "cells": [
        "responseCode",
        "0"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Updating the card status to blocked",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am changing the status with the following details:",
  "rows": [
    {
      "cells": [
        "referenceNumber",
        "6539518357"
      ]
    },
    {
      "cells": [
        "cardStatus",
        "3"
      ]
    },
    {
      "cells": [
        "reason",
        "1"
      ]
    },
    {
      "cells": [
        "remarks",
        "Test"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardUpdateStepDefs.iAmChangingTheStatusWithTheFollowingDetails(DataTable)"
});
formatter.result({
  "error_message": "java.net.UnknownHostException: apitest.pineperks.innull\r\n\tat java.net.InetAddress.getAllByName0(InetAddress.java:1281)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1193)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1127)\r\n\tat org.apache.http.impl.conn.SystemDefaultDnsResolver.resolve(SystemDefaultDnsResolver.java:45)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.resolveHostname(DefaultClientConnectionOperator.java:262)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:161)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2141)\r\n\tat io.restassured.internal.http.HTTPBuilder.post(HTTPBuilder.java:349)\r\n\tat io.restassured.internal.http.HTTPBuilder$post$3.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1274)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:98)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1225)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:822)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:152)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat com.qc.BaseAPI$logFilter.filter(BaseAPI.java:165)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1744)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:98)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1225)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:822)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:57)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1750)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:98)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1225)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:822)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:57)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:175)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat com.qc.BaseAPI.postAPI(BaseAPI.java:79)\r\n\tat pl.rest.service.CardUpdate.adminCardUpdate(CardUpdate.java:37)\r\n\tat pl.rest.stepDefs.CardUpdateStepDefs.iAmChangingTheStatusWithTheFollowingDetails(CardUpdateStepDefs.java:49)\r\n\tat ✽.i am changing the status with the following details:(classpath:features/cardissue/AdminCardUpdate.feature:24)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "remarks",
        "Test"
      ]
    },
    {
      "cells": [
        "responseCode",
        "13"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card data"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "referenceNumber",
        "6539518357"
      ]
    },
    {
      "cells": [
        "responseCode",
        "13"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "- cardStatus : Selected value Blocked is not allowed"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Updating the card status from active to active",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am changing the status with the following details:",
  "rows": [
    {
      "cells": [
        "referenceNumber",
        "6539518357"
      ]
    },
    {
      "cells": [
        "cardStatus",
        "1"
      ]
    },
    {
      "cells": [
        "reason",
        "1"
      ]
    },
    {
      "cells": [
        "remarks",
        "Test"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardUpdateStepDefs.iAmChangingTheStatusWithTheFollowingDetails(DataTable)"
});
formatter.result({
  "error_message": "java.net.UnknownHostException: apitest.pineperks.innull\r\n\tat java.net.InetAddress.getAllByName0(InetAddress.java:1281)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1193)\r\n\tat java.net.InetAddress.getAllByName(InetAddress.java:1127)\r\n\tat org.apache.http.impl.conn.SystemDefaultDnsResolver.resolve(SystemDefaultDnsResolver.java:45)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.resolveHostname(DefaultClientConnectionOperator.java:262)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:161)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2141)\r\n\tat io.restassured.internal.http.HTTPBuilder.post(HTTPBuilder.java:349)\r\n\tat io.restassured.internal.http.HTTPBuilder$post$3.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1274)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:98)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1225)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:822)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:152)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat com.qc.BaseAPI$logFilter.filter(BaseAPI.java:165)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1744)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:98)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1225)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:822)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:57)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1750)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:98)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1225)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:822)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:57)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy:175)\r\n\tat io.restassured.internal.RequestSpecificationImpl.post(RequestSpecificationImpl.groovy)\r\n\tat com.qc.BaseAPI.postAPI(BaseAPI.java:79)\r\n\tat pl.rest.service.CardUpdate.adminCardUpdate(CardUpdate.java:37)\r\n\tat pl.rest.stepDefs.CardUpdateStepDefs.iAmChangingTheStatusWithTheFollowingDetails(CardUpdateStepDefs.java:49)\r\n\tat ✽.i am changing the status with the following details:(classpath:features/cardissue/AdminCardUpdate.feature:41)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "i am again changing the status with the following details:",
  "rows": [
    {
      "cells": [
        "referenceNumber",
        "6539518357"
      ]
    },
    {
      "cells": [
        "cardStatus",
        "1"
      ]
    },
    {
      "cells": [
        "reason",
        "1"
      ]
    },
    {
      "cells": [
        "remarks",
        "Test"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CardUpdateStepDefs.iAmChangingTheStatusWithTheFollowingDetails(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "remarks",
        "Test"
      ]
    },
    {
      "cells": [
        "responseCode",
        "13"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card data"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "referenceNumber",
        "6539518357"
      ]
    },
    {
      "cells": [
        "responseCode",
        "13"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Card is already in this state. Please choose different status to update"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("classpath:features/cardissue/InstantNonRelodableDigital.feature");
formatter.feature({
  "name": "Issuing instant Non Reloadable cards",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "Issuing a instant non reloadable card",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@DB"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "7"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "8284854535"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Non_Reloadable_Digital_Card_using_header(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "orderStatus",
        "6"
      ]
    },
    {
      "cells": [
        "successCount",
        "1"
      ]
    },
    {
      "cells": [
        "failedCount",
        "0"
      ]
    },
    {
      "cells": [
        "orderAmount",
        "1000"
      ]
    },
    {
      "cells": [
        "responseCode",
        "0"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "customerName",
        "mobileNumber",
        "email",
        "amount",
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "afzal",
        "8284854535",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "0",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list in the database",
  "rows": [
    {
      "cells": [
        "ActivationEmail",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "ActivationMobileNumber",
        "8284854535"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheCardListInTheDatabase(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Issuing a instant non reloadable card",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@DB"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"new\" header with V2 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "7"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "8284854535"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Non_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "orderStatus",
        "6"
      ]
    },
    {
      "cells": [
        "successCount",
        "1"
      ]
    },
    {
      "cells": [
        "failedCount",
        "0"
      ]
    },
    {
      "cells": [
        "orderAmount",
        "1000"
      ]
    },
    {
      "cells": [
        "responseCode",
        "0"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "customerName",
        "mobileNumber",
        "email",
        "amount",
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "afzal",
        "8284854535",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "0",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list in the database",
  "rows": [
    {
      "cells": [
        "ActivationEmail",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "ActivationMobileNumber",
        "8284854535"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheCardListInTheDatabase(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validating the response code and messages.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"old\" header with V1 of API",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "7"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "\u003ccustomerName\u003e"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "\u003cmobileNumber\u003e"
      ]
    },
    {
      "cells": [
        "email",
        "\u003cemail\u003e"
      ]
    },
    {
      "cells": [
        "amount",
        "\u003camount\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "name": "i should see the following in the header level",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseCode",
        "\u003cresponseCode\u003e"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "\u003cresponseMessageatheaderlevel\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "i should see the following in the card list",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "\u003cresponseCode\u003e",
        "\u003cresponseMessage\u003e"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "customerName",
        "mobileNumber",
        "email",
        "amount",
        "responseMessage",
        "responseCode",
        "responseMessageatheaderlevel"
      ]
    },
    {
      "cells": [
        "123Afzal",
        "8284854535",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "- firstName : Customer Name is not valid. It should start with an alphabet and could contain maximum 50 characters in form of alphabets, numbers, white space, dot(.)",
        "13",
        "Invalid card data"
      ]
    },
    {
      "cells": [
        "afzal",
        "1111111111",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "- mobileNumber : Mobile Number is not valid",
        "13",
        "Invalid card data"
      ]
    },
    {
      "cells": [
        "afzal",
        "8284854535",
        "afzal.ahmed@",
        "1000",
        "- email : Email Format is not valid",
        "13",
        "Invalid card data"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validating the response code and messages.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "7"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "123Afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "8284854535"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Non_Reloadable_Digital_Card_using_header(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseCode",
        "13"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card data"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "13",
        "- firstName : Customer Name is not valid. It should start with an alphabet and could contain maximum 50 characters in form of alphabets, numbers, white space, dot(.)"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the response code and messages.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "7"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "1111111111"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Non_Reloadable_Digital_Card_using_header(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseCode",
        "13"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card data"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "13",
        "- mobileNumber : Mobile Number is not valid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the response code and messages.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "7"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "8284854535"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Non_Reloadable_Digital_Card_using_header(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseCode",
        "13"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card data"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "13",
        "- email : Email Format is not valid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validating the error response code and messages.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"new\" header with V2 of API",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "7"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "\u003ccustomerName\u003e"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "\u003cmobileNumber\u003e"
      ]
    },
    {
      "cells": [
        "email",
        "\u003cemail\u003e"
      ]
    },
    {
      "cells": [
        "amount",
        "\u003camount\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "name": "i should see the following in the header level",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseCode",
        "\u003cresponseCode\u003e"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "\u003cresponseMessageatheaderlevel\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "i should see the following in the card list",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "\u003cresponseCode\u003e",
        "\u003cresponseMessage\u003e"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "customerName",
        "mobileNumber",
        "email",
        "amount",
        "responseMessage",
        "responseCode",
        "responseMessageatheaderlevel"
      ]
    },
    {
      "cells": [
        "123Afzal",
        "8284854535",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "- firstName : Customer Name is not valid. It should start with an alphabet and could contain maximum 50 characters in form of alphabets, numbers, white space, dot(.)",
        "13",
        "Invalid card data"
      ]
    },
    {
      "cells": [
        "afzal",
        "1111111111",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "- mobileNumber : Mobile Number is not valid",
        "13",
        "Invalid card data"
      ]
    },
    {
      "cells": [
        "afzal",
        "8284854535",
        "afzal.ahmed@",
        "1000",
        "- email : Email Format is not valid",
        "13",
        "Invalid card data"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validating the error response code and messages.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"new\" header with V2 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "7"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "123Afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "8284854535"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Non_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseCode",
        "13"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card data"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "13",
        "- firstName : Customer Name is not valid. It should start with an alphabet and could contain maximum 50 characters in form of alphabets, numbers, white space, dot(.)"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the error response code and messages.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"new\" header with V2 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "7"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "1111111111"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Non_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseCode",
        "13"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card data"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "13",
        "- mobileNumber : Mobile Number is not valid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the error response code and messages.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"new\" header with V2 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "7"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "8284854535"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Non_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseCode",
        "13"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card data"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "13",
        "- email : Email Format is not valid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Issuing a card with Invalid Scheme id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "51"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "8284854535"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Non_Reloadable_Digital_Card_using_header(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "responseCode",
        "305"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card scheme Id"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Issuing a card with Invalid Scheme id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Non Reloadable Digital Card using \"new\" header with V2 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "51"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "8284854535"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Non_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "responseCode",
        "305"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card scheme Id"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Issuing card with amoount more that available account balance.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "Validating the net order amount after changing the issuance charges",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.uri("classpath:features/cardissue/InstantReloadableDigital.feature");
formatter.feature({
  "name": "Issuing Reloadable Digital cards with V1 and V2 API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Issuing a Reloadable Digital Card with V1 API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@DB"
    }
  ]
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "context"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.iAmIssuingAnInstantReloadableDigitalCardUsingHeaderWithVOfAPI(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "orderStatus",
        "6"
      ]
    },
    {
      "cells": [
        "successCount",
        "1"
      ]
    },
    {
      "cells": [
        "failedCount",
        "0"
      ]
    },
    {
      "cells": [
        "orderAmount",
        "1000"
      ]
    },
    {
      "cells": [
        "responseCode",
        "0"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "customerName",
        "mobileNumber",
        "email",
        "amount",
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "afzal",
        "8284854535",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "0",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list in the database",
  "rows": [
    {
      "cells": [
        "ActivationEmail",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "ActivationMobileNumber",
        "context"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheCardListInTheDatabase(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Issuing a Reloadable Digital Card with V2 API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@DB"
    }
  ]
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Reloadable Digital Card using \"new\" header with V2 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "context"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "orderStatus",
        "6"
      ]
    },
    {
      "cells": [
        "successCount",
        "1"
      ]
    },
    {
      "cells": [
        "failedCount",
        "0"
      ]
    },
    {
      "cells": [
        "orderAmount",
        "1000"
      ]
    },
    {
      "cells": [
        "responseCode",
        "0"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "customerName",
        "mobileNumber",
        "email",
        "amount",
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "afzal",
        "8284854535",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "0",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list in the database",
  "rows": [
    {
      "cells": [
        "ActivationEmail",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "ActivationMobileNumber",
        "context"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheCardListInTheDatabase(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validating the response code and messages for V1 API.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.step({
  "name": "i am issuing an Instant Reloadable Digital Card using \"old\" header with V1 of API",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "\u003ccustomerName\u003e"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "\u003cmobileNumber\u003e"
      ]
    },
    {
      "cells": [
        "email",
        "\u003cemail\u003e"
      ]
    },
    {
      "cells": [
        "amount",
        "\u003camount\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "name": "i should see the following in the header level",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "\u003cresponseMessageatheaderlevel\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "i should see the following in the card list",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "\u003cresponseCode\u003e",
        "\u003cresponseMessage\u003e"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "customerName",
        "mobileNumber",
        "email",
        "amount",
        "responseMessage",
        "responseCode",
        "responseMessageatheaderlevel"
      ]
    },
    {
      "cells": [
        "123Afzal",
        "context",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "- firstName : Customer Name is not valid. It should start with an alphabet and could contain maximum 50 characters in form of alphabets, numbers, white space, dot(.)",
        "13",
        "Invalid card data"
      ]
    },
    {
      "cells": [
        "afzal",
        "1111111111",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "- mobileNumber : Mobile Number is not valid",
        "13",
        "Invalid card data"
      ]
    },
    {
      "cells": [
        "afzal",
        "context",
        "afzal.ahmed@",
        "1000",
        "- email : Email Format is not valid",
        "13",
        "Invalid card data"
      ]
    },
    {
      "cells": [
        "afzal",
        "context",
        "afzal.ahmed@pinelabs.com",
        "99999999",
        "Invalid Maximum Load Amount",
        "364",
        "Success"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the response code and messages for V1 API.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "123Afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "context"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.iAmIssuingAnInstantReloadableDigitalCardUsingHeaderWithVOfAPI(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card data"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "13",
        "- firstName : Customer Name is not valid. It should start with an alphabet and could contain maximum 50 characters in form of alphabets, numbers, white space, dot(.)"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the response code and messages for V1 API.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "1111111111"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.iAmIssuingAnInstantReloadableDigitalCardUsingHeaderWithVOfAPI(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card data"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "13",
        "- mobileNumber : Mobile Number is not valid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the response code and messages for V1 API.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "context"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.iAmIssuingAnInstantReloadableDigitalCardUsingHeaderWithVOfAPI(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card data"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "13",
        "- email : Email Format is not valid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the response code and messages for V1 API.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "context"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "99999999"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.iAmIssuingAnInstantReloadableDigitalCardUsingHeaderWithVOfAPI(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "364",
        "Invalid Maximum Load Amount"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validating the error response code and messages for V2 API.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.step({
  "name": "i am issuing an Instant Reloadable Digital Card using \"new\" header with V2 of API",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "\u003ccustomerName\u003e"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "\u003cmobileNumber\u003e"
      ]
    },
    {
      "cells": [
        "email",
        "\u003cemail\u003e"
      ]
    },
    {
      "cells": [
        "amount",
        "\u003camount\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "name": "i should see the following in the header level",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "\u003cresponseMessageatheaderlevel\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "i should see the following in the card list",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "\u003cresponseCode\u003e",
        "\u003cresponseMessage\u003e"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "customerName",
        "mobileNumber",
        "email",
        "amount",
        "responseMessage",
        "responseCode",
        "responseMessageatheaderlevel"
      ]
    },
    {
      "cells": [
        "123Afzal",
        "context",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "- firstName : Customer Name is not valid. It should start with an alphabet and could contain maximum 50 characters in form of alphabets, numbers, white space, dot(.)",
        "13",
        "Invalid card data"
      ]
    },
    {
      "cells": [
        "afzal",
        "1111111111",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "- mobileNumber : Mobile Number is not valid",
        "13",
        "Invalid card data"
      ]
    },
    {
      "cells": [
        "afzal",
        "context",
        "afzal.ahmed@",
        "1000",
        "- email : Email Format is not valid",
        "13",
        "Invalid card data"
      ]
    },
    {
      "cells": [
        "afzal",
        "context",
        "afzal.ahmed@pinelabs.com",
        "99999999",
        "Invalid Maximum Load Amount",
        "364",
        "Success"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the error response code and messages for V2 API.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Reloadable Digital Card using \"new\" header with V2 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "123Afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "context"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card data"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "13",
        "- firstName : Customer Name is not valid. It should start with an alphabet and could contain maximum 50 characters in form of alphabets, numbers, white space, dot(.)"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the error response code and messages for V2 API.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Reloadable Digital Card using \"new\" header with V2 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "1111111111"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card data"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "13",
        "- mobileNumber : Mobile Number is not valid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the error response code and messages for V2 API.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Reloadable Digital Card using \"new\" header with V2 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "context"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card data"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "13",
        "- email : Email Format is not valid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the error response code and messages for V2 API.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Reloadable Digital Card using \"new\" header with V2 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "context"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "99999999"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "364",
        "Invalid Maximum Load Amount"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Issuing a card with Invalid Scheme id for V1 API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "51"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "context"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.iAmIssuingAnInstantReloadableDigitalCardUsingHeaderWithVOfAPI(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "responseCode",
        "305"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card scheme Id"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Issuing a card with Invalid Scheme id for V2 API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Reloadable Digital Card using \"new\" header with V2 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "51"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "context"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "responseCode",
        "305"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Invalid card scheme Id"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Issuing a reloadable card on already linked mobile for V1 API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Reloadable Digital Card using \"old\" header with V1 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "context"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.iAmIssuingAnInstantReloadableDigitalCardUsingHeaderWithVOfAPI(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am again issuing the the card with the same details with \"old\" for V1 API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "context"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CardIssueStepDefs.iAmIssuingAnInstantReloadableDigitalCardUsingHeaderWithVOfAPI(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "orderStatus",
        "6"
      ]
    },
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "orderAmount",
        "1000"
      ]
    },
    {
      "cells": [
        "responseCode",
        "0"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "customerName",
        "mobileNumber",
        "email",
        "amount",
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "afzal",
        "8284854535",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "269",
        "Request declined. Only one such card can be linked to a mobile number"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i fetch the mobile number from properties",
  "keyword": "Given "
});
formatter.match({
  "location": "PreCondition.iFetchTheMobileNumberFromProperties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "de link from all the previously issued card",
  "keyword": "And "
});
formatter.match({
  "location": "PreCondition.deLinkFromAllThePreviouslyIssuedCard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Issuing a reloadable card on already linked mobile for V2 API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSet0"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "i am an authorized corporate user",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizeStepDefs.IamAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am issuing an Instant Reloadable Digital Card using \"new\" header with V2 of API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "context"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CardIssueStepDefs.i_am_issuing_an_Instant_Reloadable_Digital_Card_with_V2_API(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am again issuing the the card with the same details with \"old\" for V1 API",
  "rows": [
    {
      "cells": [
        "cardSchemeId",
        "12"
      ]
    },
    {
      "cells": [
        "isLinkToBeSentOnMobile",
        "true"
      ]
    },
    {
      "cells": [
        "customerName",
        "afzal"
      ]
    },
    {
      "cells": [
        "mobileNumber",
        "context"
      ]
    },
    {
      "cells": [
        "email",
        "afzal.ahmed@pinelabs.com"
      ]
    },
    {
      "cells": [
        "amount",
        "1000"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CardIssueStepDefs.iAmIssuingAnInstantReloadableDigitalCardUsingHeaderWithVOfAPI(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TransactionsStepDefs.theStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the header level",
  "rows": [
    {
      "cells": [
        "orderStatus",
        "6"
      ]
    },
    {
      "cells": [
        "successCount",
        "0"
      ]
    },
    {
      "cells": [
        "failedCount",
        "1"
      ]
    },
    {
      "cells": [
        "orderAmount",
        "1000"
      ]
    },
    {
      "cells": [
        "responseCode",
        "0"
      ]
    },
    {
      "cells": [
        "responseMessage",
        "Success"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.iShouldSeeTheFollowingInTheHeaderLevel(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see the following in the card list",
  "rows": [
    {
      "cells": [
        "customerName",
        "mobileNumber",
        "email",
        "amount",
        "responseCode",
        "responseMessage"
      ]
    },
    {
      "cells": [
        "afzal",
        "8284854535",
        "afzal.ahmed@pinelabs.com",
        "1000",
        "269",
        "Request declined. Only one such card can be linked to a mobile number"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TransactionsStepDefs.i_should_see_the_following_in_the_card_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
});