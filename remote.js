var accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzM1OWQ5NWIyNGUxNWM3MGY2ZjQ5ODFmYmM3ZGJhZDI4LTE0NzgwNDI2MDYiLCJpc3MiOiJTSzM1OWQ5NWIyNGUxNWM3MGY2ZjQ5ODFmYmM3ZGJhZDI4Iiwic3ViIjoiQUNkMDFjYWFmMDIyMDQxMzk3MWJlMmQ0YTUzOGZmMjQ5MyIsImV4cCI6MTQ3ODA0NjIwNiwiZ3JhbnRzIjp7ImlkZW50aXR5IjoiVHJpYWwiLCJydGMiOnsiY29uZmlndXJhdGlvbl9wcm9maWxlX3NpZCI6IlZTN2U1ODFlYzEzMzk0M2FkYWE3NWU0OTk2MjQ3NDM5ZGEifX19.o07uKeTIlKVY5zhpP1KyT8qjnODA_c_y0fV-ZKszeRI';
var accessManager = new Twilio.AccessManager(accessToken);
var client = new Twilio.Conversations.Client(accessManager);

client.inviteToConversation('Same identity that you used to generate the first token').then(onInviteAccepted);