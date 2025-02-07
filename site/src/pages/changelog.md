---
id: changelog
slug: /changelog
---

# Changelog

| Date | Notes |
|--|--|
| March 18, 2022 | Added new guides to Voice API section and updated old ones |
| February 16, 2022 | Added details of new http voice statistics endpoint |
| February 16, 2022 | Added new call modify endpoint with BXML to Voice API spec |
| February 3, 2022 | Added brand vetting UI and API and added unassign campaign from TN to campaign APIs |
| February 2, 2022 | Removed the Staging environment from the server list for WebRTC API Specs |
| January 31, 2022 | Added back MFA Webhooks (Callbacks) documentation
| January 18, 2022 | Added downloadable CSV sample on Messaging Campaign UI and Import Campaign UI guides for Bulk TN Upload |
| December 28, 2021 | Many updates to Voice API spec |
| December 07, 2021 | Add documentation for outbound call queueing |
| December 6, 2021  | Clarify Bridge verb documentation |
| November 17, 2021 | Update application callback docs to be clear about what is sent when |
| November 12, 2021 | Added cURL Code Snippets for WebRTC and Voice |
| November 11, 2021 | Ensure complete cross reference for AMD results |
| November 11, 2021 | Added cURL Code Snippets for Multi-Factor Auth and Messaging |
| November 10, 2021 | Added cURL Code Snippets for TN Lookup |
| November 10th, 2021| Revamped the "Key Concepts" page for greater clarity |
| November 9th, 2021 | Add more content to the "about" page in voice |
| November 8th, 2021 | Fixed spelling and grammar errors in the docs. Re-added content into `initiate` callback. Fixed ambiguous writing. |
| November 4th, 2021 | Clarify how async `MachineDetection` works
| November 3rd, 2021 | Added `sort` parameter to GetMessages |
| October 25th, 2021 | Messaging: Clarify accepted values for telephone numbers in GET /messages |
| October 21st, 2021 | Updated `Ring` to reflect `answerCall` attribute option. Typo fixes. |
| October 15, 2021 | Added `CreateParticipant` schema and `CreateParticipantResponse` to `CreateParticipant`
| October 1st, 2021 | Messaging: Updated DELETE /media HTTP response code. |
| September 23rd, 2021 | Change `MachineDetectionRequest` schema name to `MachineDetectionConfiguration` |
| September 21st, 2021 | Add parameters of messageDirection, carrierName and messageType to GetMessages |
| September 15th, 2021 | Add Messaging International API Spec |
| September 8th, 2021 | Added `MachineDetection` object to the Voice OpenAPI spec and bumped to version 3.2.0 |
| August 27th, 2021 | Reverted Phone Number Lookup spec to 1.0.5 |
| August 25th, 2021 | Provide corrections to Sip Registrar guide |
| August 24th, 2021 | Added Sip Registrar guide and updated Network Bridge guide |
| August 2nd, 2021 | Added callback objects to the voice OpenAPI spec |
| July 30th, 2021 | Updated `media` description for `createMessages` to include Content-Disposition header information |
| July 15th, 2021 | Updated Python code snippets for voice, messaging, and MFA to reflect the breaking changes in the v10.0.0 SDK |
| July 7nd, 2021 | Updated Phone Number Lookup spec to reflect that all property names in the result section are now camelcase.|
| July 2nd, 2021 | Updated WebRTC's parameter order definition. `sessionId` should always be passed in before `participantId` when both are present |
| May 20, 2021  | Updated Phone Number Lookup spec to remove X-accountId and replace with path parameter |
| May 5th, 2021 | Update WebRTC's `callbackUrl` parameter in Participant to be nullable. |
| May 3rd, 2021 | Major overhaul to voice API spec. There are no changes to the API itself, just changes to the API spec. The API spec now uses the OpenAPI 3.0 format. Many endpoints have been renamed. Many object schemas have been renamed. Many endpoints that had missing response codes have had their missing information added. Many parameters that are optional have been marked as such. Several incorrect content-type headers have been corrected. Many strings that used to be documented as enums have been updated to be represented as strings. |
| April 30th, 2021 | Update WebRTC's `deviceApiVersion` enum values to uppercase. |
| April 6th, 2021 | Update messaging's `createMessage` and `uploadMedia` successful response status code. |
| March 25th, 2021 | Updated portal config to use a local js script. |
| March 17th, 2021 | Added `campaignClass` to the message search API response. |
| March 16th, 2021 | Added 4 fields `messageSize`, `messageLength`, `attachmentCount`, and `recipientCount` to the message search API response. |
| March 10th, 2021 | Added `participants` and `sessions` to the WebRtc spec. |
| March 10th, 2021 | Added `Continuation-Token` as a possible response header for `listMedia`. |
| March 10th, 2021 | Added `calls`, `recordings`, and `conferences` tags to the Voice spec. |
| March 9th, 2021 | Added `media` and `messages` tags to the Messaging OpenAPI spec. |
| March 8th, 2021 | Add optional `deviceApiVersion` parameter to WebRTC `Participant` schema in preparation for the upcoming "Unified Plan" conversion. |
| March 5th, 2021 | Remove messaging's explicit declaration of `Content-Length` in `uploadMedia`. |
| March 4th, 2021 | Update messaging's `Media` object's `contentLength` type from `string` to `integer`. |
| March 3rd, 2021 | Removed extraneous properties from messaging's `Media` object. |
| February 26th, 2021 | Added the "pai" and "identity" fields to Voice API callbacks that contain Stir/Shaken data  |
| February 25th, 2021 | Renamed `userId` to `accountId` in messaging spec. |
| February 23rd, 2021 | Renamed `TwoFactorAuth` to `MultiFactorAuth`. This is a major change and current SDK users will need to use the new name when upgrading the package. |
| February 10th, 2021 | Added release notes |
