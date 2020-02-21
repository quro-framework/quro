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
  TextChannel
} from '../..'

/*
 * BotEventListenableInterface.
 */
export interface BotEventListenableInterface {
  /**
   * On channel create.
   *
   * @param channel
   */
  onChannelCreate(handler: (channel: Channel) => void): void

  /**
   * On channel delete.
   *
   * @param channel
   */
  onChannelDelete(handler: (channel: Channel) => void): void

  /**
   * On channel pins update.
   *
   * @param channel
   * @param time
   */
  onChannelPinsUpdate(handler: (channel: Channel, time: Date) => void): void

  /**
   * On channel update.
   *
   * @param oldChannel
   * @param newChannel
   */
  onChannelUpdate(
    handler: (newChannel: Channel, oldChannel: Channel) => void
  ): void

  /**
   * On client user guild settings update.
   *
   * @param settings
   */
  onClientUserGuildSettingsUpdate(
    handler: (settings: ClientUserGuildSettings) => void
  ): void

  /**
   * On client user settings update.
   *
   * @param settings
   */
  onClientUserSettingsUpdate(
    handler: (settings: ClientUserSettings) => void
  ): void

  /**
   * On debug.
   *
   * @param info
   */
  onDebug(handler: (info: string) => void): void

  /**
   * On disconnect.
   * @param event
   */
  onDisconnect(handler: (event: CloseEvent) => void): void

  /**
   * On emoji create.
   *
   * @param emoji
   */
  onEmojiCreate(handler: (emoji: Emoji) => void): void

  /**
   * On emoji delete.
   *
   * @param emoji
   */
  onEmojiDelete(handler: (emoji: Emoji) => void): void

  /**
   * On emoji update.
   *
   * @param newEmoji
   * @param oldEmoji
   */
  onEmojiUpdate(handler: (newEmoji: Emoji, oldEmoji: Emoji) => void): void

  /**
   * On error.
   *
   * @param error
   */
  onError(handler: (error: Error) => void): void

  /**
   * On guild ban add.
   *
   * @param guild
   * @param user
   */
  onGuildBanAdd(handler: (guild: Guild, user: User) => void): void

  /**
   * On guild ban remove.
   *
   * @param guild
   * @param user
   */
  onGuildBanRemove(handler: (guild: Guild, user: User) => void): void

  /**
   * On guild create.
   *
   * @param guild
   */
  onGuildCreate(handler: (guild: Guild) => void): void

  /**
   * On guild delete.
   *
   * @param guild
   */
  onGuildDelete(handler: (guild: Guild) => void): void

  /**
   * On guild integration update.
   *
   * @param guild
   */
  onGuildIntegrationUpdate(handler: (guild: Guild) => void): void

  /**
   * On guild member add.
   *
   * @param member
   */
  onGuildMemberAdd(handler: (member: GuildMember) => void): void

  /**
   * On guild member avaiable.
   *
   * @param member
   */
  onGuildMemberAvailable(handler: (member: GuildMember) => void): void

  /**
   * On guild member remove.
   *
   * @param member
   */
  onGuildMemberRemove(handler: (member: GuildMember) => void): void

  /**
   * On guild members chunk.
   *
   * @param members
   * @param guild
   */
  onGuildMembersChunk(
    handler: (members: GuildMember[], guild: Guild) => void
  ): void

  /**
   *
   * On guild member speaking.
   *
   * @param member
   * @param speaking
   */
  onGuildMemberSpeaking(
    handler: (member: GuildMember, speaking: boolean) => void
  ): void

  /**
   * On guild member update.
   *
   * @param newMember
   * @param oldMember
   */
  onGuildMemberUpdate(
    handler: (newMember: GuildMember, oldMember: GuildMember) => void
  ): void

  /**
   * On guild unavaiable.
   *
   * @param guild
   */
  onGuildUnavaiable(handler: (guild: Guild) => void): void

  /**
   * On guild update.
   *
   * @param newGuild
   * @param oldGuild
   */
  onGuildUpdate(handler: (newGuild: Guild, oldGuild: Guild) => void): void

  /**
   * On message.
   *
   * @param message
   */
  onMessage(handler: (message: Message) => void): void

  /**
   * On message delete.
   *
   * @param message
   */
  onMessageDelete(handler: (message: Message) => void): void

  /**
   * On message delete bulk.
   *
   * @param messages
   */
  onMessageDeleteBulk(
    handler: (messages: Collection<Snowflake, Message>) => void
  ): void

  /**
   * On message reaction add.
   *
   * @param reaction
   * @param user
   */
  onMessageReactionAdd(
    handler: (reaction: MessageReaction, user: User) => void
  ): void

  /**
   * On message reaction remove.
   *
   * @param reaction
   * @param user
   */
  onMessageReactionRemove(
    handler: (reaction: MessageReaction, user: User) => void
  ): void

  /**
   * On message reaction remove all.
   *
   * @param message
   */
  onMessageReactionRemoveAll(handler: (message: Message) => void): void

  /**
   * On message update.
   *
   * @param newMessage
   * @param oldMessage
   */
  onMessageUpdate(
    handler: (newMessage: Message, oldMessage: Message) => void
  ): void

  /**
   * On presence update.
   *
   * @param newMember
   * @param oldMember
   */
  onPresenceUpdate(
    handler: (newMember: GuildMember, oldMember: GuildMember) => void
  ): void

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
  ): void

  /**
   * On ready.
   */
  onReady(handler: () => void): void

  /**
   * On reconnecting.
   */
  onReconnecting(handler: () => void): void

  /**
   * On resume.
   *
   * @param replayed
   */
  onResume(handler: (replayed: number) => void): void

  /**
   * On role create.
   *
   * @param role
   */
  onRoleCreate(handler: (role: Role) => void): void

  /**
   * On role delete.
   *
   * @param role
   */
  onRoleDelete(handler: (role: Role) => void): void

  /**
   * On role update.
   *
   * @param newRole
   * @param oldRole
   */
  onRoleUpdate(handler: (newRole: Role, oldRole: Role) => void): void

  /**
   * On typing start.
   *
   * @param channel
   * @param user
   */
  onTypingStart(handler: (channel: Channel, user: User) => void): void

  /**
   * On typing stop.
   *
   * @param channel
   * @param user
   */
  onTypingStop(handler: (channel: Channel, user: User) => void): void

  /**
   * On user note update.
   *
   * @param user
   * @param newNote
   * @param oldNote
   */
  onUserNoteUpdate(
    handler: (user: User, newNote: string, oldNote: string) => void
  ): void

  /**
   * On user update.
   *
   * @param newUser
   * @param oldUser
   */
  onUserUpdate(handler: (newUser: User, oldUser: User) => void): void

  /**
   * On voice state update.
   *
   * @param newMember
   * @param oldMember
   */
  onVoiceStateUpdate(
    handler: (newMember: GuildMember, oldMember: GuildEmbedData) => void
  ): void

  /**
   * On warn.
   *
   * @param info
   */
  onWarn(handler: (info: string) => void): void

  /**
   * On webhook update.
   *
   * @param channel
   */
  onWebhookUpdate(handler: (channel: TextChannel) => void): void
}
