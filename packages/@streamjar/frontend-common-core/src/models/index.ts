import { Account } from './account.model';
import { Authorization } from './authorization.model';
import { Boost } from './boost.model';
import { Channel } from './channel.model';
import { Command } from './command.model';
import { Filter } from './filter.model';
import { Follower } from './follower.model';
import { Font } from './font.model';
import { Giveaway } from './giveaway.model';
import { Goal } from './goal.model';
import { Integration } from './integration.model';
import { Invite } from './invite.model';
import { Message } from './message.model';
import { OAuthApplication } from './oauth-application.model';
import { Panel } from './panel.model';
import { Permission } from './permission.model';
import { Platform } from './platform.model';
import { Points } from './points.model';
import { Quote } from './quote.model';
import { Rank } from './rank.model';
import { Service } from './service.model';
import { Session } from './session.model';
import { Settings } from './settings.model';
import { Statistics } from './statistics.model';
import { Subscriber } from './subscriber.model';
import { TimedMessage } from './timed-message.model';
import { Tip } from './tip.model';
import { Tipper } from './tipper.model';
import { Twitter } from './twitter.model';
import { ViewerAccount } from './viewer-account.model';
import { Viewer } from './viewer.model';
import { Warning } from './warning.model';
import { Website } from './website.model';

export { IAccount, Account, IAccountInvite } from './account.model';
export { IChannel, Channel, IEvent, IStatus, IStatuses, ITicket } from './channel.model';
export { ITip, Tip, IExternalTip } from './tip.model';
export { ISummary, Statistics } from './statistics.model';
export { IFollower, Follower } from './follower.model';
export { ISubscriber, Subscriber } from './subscriber.model';
export { IInvite, Invite } from './invite.model';
export { IPermission, Permission } from './permission.model';
export { IService, Service } from './service.model';
export { IGoal, Goal, ICreatableGoal } from './goal.model';
export { IQuote, Quote } from './quote.model';
export { Command, ICommand } from './command.model';
export { Message, IMessage } from './message.model';
export { Settings, IExtralife, ITiltify, ITwitter, IGreetings, ISchedule, ITips, IPayment, ILinks } from './settings.model';
export { Twitter, ITwitterURLs } from './twitter.model';
export { Website, ILayout, IPage, IWebsite } from './website.model';
export { Filter, IFilter } from './filter.model';
export { Rank, IRank } from './rank.model';
export { Boost, IBoost } from './boost.model';
export { ITimedMessage, TimedMessage } from './timed-message.model';
export { IWarning, Warning } from './warning.model';
export { IPoints, Points } from './points.model';
export { OAuthApplication, IOAuthApplication } from './oauth-application.model';
export { Authorization, IAuthorization } from './authorization.model';
export { Platform, IPlatform } from './platform.model';
export { Session, ISession } from './session.model';
export { Tipper, ITipper } from './tipper.model';
export {
	ISpotifySong, Integration, IIntegration, IOAuthConfig, ITiltifyCampaign,
} from './integration.model';
export { IGoogleFont, Font } from './font.model';
export { Viewer, IViewer } from './viewer.model';
export { ViewerAccount, IViewerAccount } from './viewer-account.model';
export { Giveaway, IGiveawayWin } from './giveaway.model';
export {
	IPanel, PanelSetting, PanelType, IPanelTips, IPanelAudioRecording, IPanelInput, IPanelText, Panel,
} from './panel.model';

export const MODULES = [
	Account,
	Channel,
	Statistics,
	Follower,
	Subscriber,
	Invite,
	Permission,
	Service,
	Goal,
	Quote,
	Command,
	Message,
	Settings,
	Twitter,
	Website,
	Filter,
	Rank,
	Boost,
	TimedMessage,
	Warning,
	Panel,
	Points,
	OAuthApplication,
	Tip,
	Authorization,
	Platform,
	Session,
	Tipper,
	Integration,
	Font,
	Viewer,
	Giveaway,
	ViewerAccount,
];