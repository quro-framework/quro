import {
  Channel,
  ClientUserGuildSettings,
  ClientUserSettings,
  Emoji,
  Guild,
  User,
  GuildMember,
  Message,
  Collection,
  Snowflake,
  MessageReaction,
  Role,
  GuildEmbedData,
  TextChannel,
  Client
} from 'discord.js'

/*
 * BotEventListenable class.
 */
export class BotEventListenable implements BotEventListenableInterface {
  /**
   * Discord.js client.
   *
   */
  private readonly client: Client

  /**
   * BotEventListenable constructor.
   *
   * @param client
   */
  constructor(client: Client) {
    this.client = client
  }

  /**
   * On channel create.
   *
   * @param channel
   */
  onChannelCreate(handler: (channel: Channel) => void) {
    this.client.on('channelCreate', handler)
  }

  /**
   * On channel delete.
   *
   * @param channel
   */
  onChannelDelete(handler: (channel: Channel) => void) {
    this.client.on('channelDelete', handler)
  }

  /**
   * On channel pins update.
   *
   * @param channel
   * @param time
   */
  onChannelPinsUpdate(handler: (channel: Channel, time: Date) => void) {
    this.client.on('channelPinsUpdate', handler)
  }

  /**
   * On channel update.
   *
   * @param oldChannel
   * @param newChannel
   */
  onChannelUpdate(handler: (newChannel: Channel, oldChannel: Channel) => void) {
    this.client.on('channelUpdate', handler)
  }

  /**
   * On client user guild settings update.
   *
   * @param settings
   */
  onClientUserGuildSettingsUpdate(
    handler: (settings: ClientUserGuildSettings) => void
  ) {
    this.client.on('clientUserGuildSettingsUpdate', handler)
  }

  /**
   * On client user settings update.
   *
   * @param settings
   */
  onClientUserSettingsUpdate(handler: (settings: ClientUserSettings) => void) {
    this.client.on('clientUserSettingsUpdate', handler)
  }

  /**
   * On debug.
   *
   * @param info
   */
  onDebug(handler: (info: string) => void) {
    this.client.on('debug', handler)
  }

  /**
   * On disconnect.
   * @param event
   */
  onDisconnect(handler: (event: CloseEvent) => void) {
    this.client.on('disconnect', handler)
  }

  /**
   * On emoji create.
   *
   * @param emoji
   */
  onEmojiCreate(handler: (emoji: Emoji) => void) {
    this.client.on('emojiCreate', handler)
  }

  /**
   * On emoji delete.
   *
   * @param emoji
   */
  onEmojiDelete(handler: (emoji: Emoji) => void) {
    this.client.on('emojiDelete', handler)
  }

  /**
   * On emoji update.
   *
   * @param newEmoji
   * @param oldEmoji
   */
  onEmojiUpdate(handler: (newEmoji: Emoji, oldEmoji: Emoji) => void) {
    this.client.on('emojiUpdate', handler)
  }

  /**
   * On error.
   *
   * @param error
   */
  onError(handler: (error: Error) => void) {
    this.client.on('error', handler)
  }

  /**
   * On guild ban add.
   *
   * @param guild
   * @param user
   */
  onGuildBanAdd(handler: (guild: Guild, user: User) => void) {
    this.client.on('guildBanAdd', handler)
  }

  /**
   * On guild ban remove.
   *
   * @param guild
   * @param user
   */
  onGuildBanRemove(handler: (guild: Guild, user: User) => void) {
    this.client.on('guildBanRemove', handler)
  }

  /**
   * On guild create.
   *
   * @param guild
   */
  onGuildCreate(handler: (guild: Guild) => void) {
    this.client.on('guildCreate', handler)
  }

  /**
   * On guild delete.
   *
   * @param guild
   */
  onGuildDelete(handler: (guild: Guild) => void) {
    this.client.on('guildDelete', handler)
  }

  /**
   * On guild integration update.
   *
   * @param guild
   */
  onGuildIntegrationUpdate(handler: (guild: Guild) => void) {
    this.client.on('guildIntegrationsUpdate', handler)
  }

  /**
   * On guild member add.
   *
   * @param member
   */
  onGuildMemberAdd(handler: (member: GuildMember) => void) {
    this.client.on('guildMemberAdd', handler)
  }

  /**
   * On guild member avaiable.
   *
   * @param member
   */
  onGuildMemberAvailable(handler: (member: GuildMember) => void) {
    this.client.on('guildMemberAvailable', handler)
  }

  /**
   * On guild member remove.
   *
   * @param member
   */
  onGuildMemberRemove(handler: (member: GuildMember) => void) {
    this.client.on('guildMemberRemove', handler)
  }

  /**
   * On guild members chunk.
   *
   * @param members
   * @param guild
   */
  onGuildMembersChunk(handler: (members: GuildMember[], guild: Guild) => void) {
    this.client.on('guildMembersChunk', handler)
  }

  /**
   *
   * On guild member speaking.
   *
   * @param member
   * @param speaking
   */
  onGuildMemberSpeaking(
    handler: (member: GuildMember, speaking: boolean) => void
  ) {
    this.client.on('guildMemberSpeaking', handler)
  }

  /**
   * On guild member update.
   *
   * @param newMember
   * @param oldMember
   */
  onGuildMemberUpdate(
    handler: (newMember: GuildMember, oldMember: GuildMember) => void
  ) {
    this.client.on('guildMemberUpdate', handler)
  }

  /**
   * On guild unavaiable.
   *
   * @param guild
   */
  onGuildUnavaiable(handler: (guild: Guild) => void) {
    this.client.on('guildUnavailable', handler)
  }

  /**
   * On guild update.
   *
   * @param newGuild
   * @param oldGuild
   */
  onGuildUpdate(handler: (newGuild: Guild, oldGuild: Guild) => void) {
    this.client.on('guildUpdate', handler)
  }

  /**
   * On message.
   *
   * @param message
   */
  onMessage(handler: (message: Message) => void) {
    this.client.on('message', handler)
  }

  /**
   * On message delete.
   *
   * @param message
   */
  onMessageDelete(handler: (message: Message) => void) {
    this.client.on('messageDelete', handler)
  }

  /**
   * On message delete bulk.
   *
   * @param messages
   */
  onMessageDeleteBulk(
    handler: (messages: Collection<Snowflake, Message>) => void
  ) {
    this.client.on('messageDeleteBulk', handler)
  }

  /**
   * On message reaction add.
   *
   * @param reaction
   * @param user
   */
  onMessageReactionAdd(
    handler: (reaction: MessageReaction, user: User) => void
  ) {
    this.client.on('messageReactionAdd', handler)
  }

  /**
   * On message reaction remove.
   *
   * @param reaction
   * @param user
   */
  onMessageReactionRemove(
    handler: (reaction: MessageReaction, user: User) => void
  ) {
    this.client.on('messageReactionRemove', handler)
  }

  /**
   * On message reaction remove all.
   *
   * @param message
   */
  onMessageReactionRemoveAll(handler: (message: Message) => void) {
    this.client.on('messageReactionRemoveAll', handler)
  }

  /**
   * On message update.
   *
   * @param newMessage
   * @param oldMessage
   */
  onMessageUpdate(handler: (newMessage: Message, oldMessage: Message) => void) {
    this.client.on('messageUpdate', handler)
  }

  /**
   * On presence update.
   *
   * @param newMember
   * @param oldMember
   */
  onPresenceUpdate(
    handler: (newMember: GuildMember, oldMember: GuildMember) => void
  ) {
    this.client.on('presenceUpdate', handler)
  }

  /**
   * On rate limit.
   *
   * @param rateLimitInfo
   */
  onRateLimit(
    handler: (rateLimitInfo: {
      limit: number
      timeDifference: number
      path: string
      method: string
    }) => void
  ) {
    this.client.on('rateLimit', handler)
  }

  /**
   * On ready.
   */
  onReady(handler: () => void) {
    this.client.on('ready', handler)
  }

  /**
   * On reconnecting.
   */
  onReconnecting(handler: () => void) {
    this.client.on('reconnecting', handler)
  }

  /**
   * On resume.
   *
   * @param replayed
   */
  onResume(handler: (replayed: number) => void) {
    this.client.on('resume', handler)
  }

  /**
   * On role create.
   *
   * @param role
   */
  onRoleCreate(handler: (role: Role) => void) {
    this.client.on('roleCreate', handler)
  }

  /**
   * On role delete.
   *
   * @param role
   */
  onRoleDelete(handler: (role: Role) => void) {
    this.client.on('roleDelete', handler)
  }

  /**
   * On role update.
   *
   * @param newRole
   * @param oldRole
   */
  onRoleUpdate(handler: (newRole: Role, oldRole: Role) => void) {
    this.client.on('roleUpdate', handler)
  }

  /**
   * On typing start.
   *
   * @param channel
   * @param user
   */
  onTypingStart(handler: (channel: Channel, user: User) => void) {
    this.client.on('typingStart', handler)
  }

  /**
   * On typing stop.
   *
   * @param channel
   * @param user
   */
  onTypingStop(handler: (channel: Channel, user: User) => void) {
    this.client.on('typingStop', handler)
  }

  /**
   * On user note update.
   *
   * @param user
   * @param newNote
   * @param oldNote
   */
  onUserNoteUpdate(
    handler: (user: User, newNote: string, oldNote: string) => void
  ) {
    this.client.on('userNoteUpdate', handler)
  }

  /**
   * On user update.
   *
   * @param newUser
   * @param oldUser
   */
  onUserUpdate(handler: (newUser: User, oldUser: User) => void) {
    this.client.on('userUpdate', handler)
  }

  /**
   * On voice state update.
   *
   * @param newMember
   * @param oldMember
   */
  onVoiceStateUpdate(
    handler: (newMember: GuildMember, oldMember: GuildEmbedData) => void
  ) {
    this.client.on('voiceStateUpdate', handler)
  }

  /**
   * On warn.
   *
   * @param info
   */
  onWarn(handler: (info: string) => void) {
    this.client.on('warn', handler)
  }

  /**
   * On webhook update.
   *
   * @param channel
   */
  onWebhookUpdate(handler: (channel: TextChannel) => void) {
    this.client.on('webhookUpdate', handler)
  }
}
