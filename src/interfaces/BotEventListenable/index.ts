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
} from 'discord.js'

/*
 * BotEventListenableInterface.
 */
export interface BotEventListenableInterface {
  /**
   * On channel create.
   *
   * @param channel
   */
  onChannelCreate(channel: Channel): void

  /**
   * On channel delete.
   *
   * @param channel
   */
  onChannelDelete(channel: Channel): void

  /**
   * On channel pins update.
   *
   * @param channel
   * @param time
   */
  onChannelPinsUpdate(channel: Channel, time: Date): void

  /**
   * On channel update.
   *
   * @param oldChannel
   * @param newChannel
   */
  onChannelUpdate(newChannel: Channel, oldChannel: Channel): void

  /**
   * On client user guild settings update.
   *
   * @param settings
   */
  onClientUserGuildSettingsUpdate(settings: ClientUserGuildSettings): void

  /**
   * On client user settings update.
   *
   * @param settings
   */
  onClientUserSettingsUpdate(settings: ClientUserSettings): void

  /**
   * On debug.
   *
   * @param info
   */
  onDebug(info: string): void

  /**
   * On disconnect.
   * @param event
   */
  onDisconnect(event: CloseEvent): void

  /**
   * On emoji create.
   *
   * @param emoji
   */
  onEmojiCreate(emoji: Emoji): void

  /**
   * On emoji delete.
   *
   * @param emoji
   */
  onEmojiDelete(emoji: Emoji): void

  /**
   * On emoji update.
   *
   * @param newEmoji
   * @param oldEmoji
   */
  onEmojiUpdate(newEmoji: Emoji, oldEmoji: Emoji): void

  /**
   * On error.
   *
   * @param error
   */
  onError(error: Error): void

  /**
   * On guild ban add.
   *
   * @param guild
   * @param user
   */
  onGuildBanAdd(guild: Guild, user: User): void

  /**
   * On guild ban remove.
   *
   * @param guild
   * @param user
   */
  onGuildBanRemove(guild: Guild, user: User): void

  /**
   * On guild create.
   *
   * @param guild
   */
  onGuildCreate(guild: Guild): void

  /**
   * On guild delete.
   *
   * @param guild
   */
  onGuildDelete(guild: Guild): void

  /**
   * On guild integration update.
   *
   * @param guild
   */
  onGuildIntegrationUpdate(guild: Guild): void

  /**
   * On guild member add.
   *
   * @param member
   */
  onGuildMemberAdd(member: GuildMember): void

  /**
   * On guild member avaiable.
   *
   * @param member
   */
  onGuildMemberAvailable(member: GuildMember): void

  /**
   * On guild member remove.
   *
   * @param member
   */
  onGuildMemberRemove(member: GuildMember): void

  /**
   * On guild members chunk.
   *
   * @param members
   * @param guild
   */
  onGuildMembersChunk(members: GuildMember[], guild: Guild): void

  /**
   *
   * On guild member speaking.
   *
   * @param member
   * @param speaking
   */
  onGuildMemberSpeaking(member: GuildMember, speaking: boolean): void

  /**
   * On guild member update.
   *
   * @param newMember
   * @param oldMember
   */
  onGuildMemberUpdate(newMember: GuildMember, oldMember: GuildMember): void

  /**
   * On guild unavaiable.
   *
   * @param guild
   */
  onGuildUnavaiable(guild: Guild): void

  /**
   * On guild update.
   *
   * @param newGuild
   * @param oldGuild
   */
  onGuildUpdate(newGuild: Guild, oldGuild: Guild): void

  /**
   * On message.
   *
   * @param message
   */
  onMessage(message: Message): void

  /**
   * On message delete.
   *
   * @param message
   */
  onMessageDelete(message: Message): void

  /**
   * On message delete bulk.
   *
   * @param messages
   */
  onMessageDeleteBulk(messages: Collection<Snowflake, Message>): void

  /**
   * On message reaction add.
   *
   * @param reaction
   * @param user
   */
  onMessageReactionAdd(reaction: MessageReaction, user: User): void

  /**
   * On message reaction remove.
   *
   * @param reaction
   * @param user
   */
  onMessageReactionRemove(reaction: MessageReaction, user: User): void

  /**
   * On message reaction remove all.
   *
   * @param message
   */
  onMessageReactionRemoveAll(message: Message): void

  /**
   * On message update.
   *
   * @param newMessage
   * @param oldMessage
   */
  onMessageUpdate(newMessage: Message, oldMessage: Message): void

  /**
   * On presence update.
   *
   * @param newMember
   * @param oldMember
   */
  onPresenceUpdate(newMember: GuildMember, oldMember: GuildMember): void

  /**
   * On rate limit.
   *
   * @param rateLimitInfo
   */
  onRateLimit(rateLimitInfo: {
    limit: number
    timeDifference: number
    path: string
    method: string
  }): void

  /**
   * On ready.
   */
  onReady(): void

  /**
   * On reconnecting.
   */
  onReconnecting(): void

  /**
   * On resume.
   *
   * @param replayed
   */
  onResume(replayed: number): void

  /**
   * On role create.
   *
   * @param role
   */
  onRoleCreate(role: Role): void

  /**
   * On role delete.
   *
   * @param role
   */
  onRoleDelete(role: Role): void

  /**
   * On role update.
   *
   * @param newRole
   * @param oldRole
   */
  onRoleUpdate(newRole: Role, oldRole: Role): void

  /**
   * On typing start.
   *
   * @param channel
   * @param user
   */
  onTypingStart(channel: Channel, user: User): void

  /**
   * On typing stop.
   *
   * @param channel
   * @param user
   */
  onTypingStop(channel: Channel, user: User): void

  /**
   * On user note update.
   *
   * @param user
   * @param newNote
   * @param oldNote
   */
  onUserNoteUpdate(user: User, newNote: string, oldNote: string): void

  /**
   * On user update.
   *
   * @param newUser
   * @param oldUser
   */
  onUserUpdate(newUser: User, oldUser: User): void

  /**
   * On voice state update.
   *
   * @param newMember
   * @param oldMember
   */
  onVoiceStateUpdate(newMember: GuildMember, oldMember: GuildEmbedData): void

  /**
   * On warn.
   *
   * @param info
   */
  onWarn(info: string): void

  /**
   * On webhook update.
   *
   * @param channel
   */
  onWebhookUpdate(channel: TextChannel): void
}
