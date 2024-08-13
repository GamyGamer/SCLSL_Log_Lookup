//Class changes
const REGEX_scp_intentional_deaths = /playing as SCP.* (Unknown cause of death|Crushed|Tesla)\./;
const REGEX_direct_kill = /.+ \((.+)\), playing as (.+), has been killed by .+ \((.+)\) playing as: (.+)\. Specific death reason: (.+)\./;
const REGEX_ID_to_username = /Nickname of (.+) is now (.+)\./;
const REGEX_Respawned_as = /Player .+ \((.+)\) respawned as (.+)./;
const REGEX_single_kill = /.+ \((?<victim>.+)\), playing as (?<role>.+), has died. Specific death reason: (?<reason>.+)\./;
const REGEX_suicide = /.+ \((.+)\), playing as (.+), has commited suicide. Specific death reason: (.+)\./;
const REGEX_respawn_manager = /RespawnManager has successfully spawned (\d+) players as (.+)!/;
const REGEX_teamkill = /.+ \((.+)\), playing as (.+), has been teamkilled by .+ \((.+)\) playing as: (.+)\. Specific death reason: (.+)\./;
const REGEX_warhead_death = /.+ \((.+)\), playing as (.+), has died. Specific death reason: Died to alpha warhead\./;
const REGEX_class_change = /.+ \((.+)\) changed role of player .+ \((.+)\) to (.+)\./;

const REGEX_admin_chat = /\[(.+) \((.+)\)\] (.+)/;

//Round events
const REGEX_round_start = /Round has been started\./;
const REGEX_round_finish = /Round finished! Anomalies: (\d+)/;
const REGEX_warhead_status = /.+ \((.+)\) set the Alpha Warhead status to (.+)\./;
const REGEX_warhead_countdown_start = /Countdown started\./;
const REGEX_warhead_countdown_paused = /Detonation cancelled\./;
const REGEX_warhead_detonated = /Warhead detonated\./;

//Kill reasons
const REGEX_suicide_reason = /Unknown cause of death|Fall damage|Crushed|Severed Hands from SCP-330|Tesla|Melted by a highly corrosive substance|SCP-207/;
const REGEX_recontained = /Recontained/;
const REGEX_Decayed = /Decayed in the Pocket Dimension/;

const REGEX_log_split = /(.+?)\|(.+?)\|(.+?)\|(.+)/;

//Networkig events
const REGEX_networking_ignore = /(.*? preauthenticated from endpoint .*? \[routed via .*?]\.|.*? authenticated from endpoint .*?\. Player ID assigned: .*?\. Auth token serial number: .*?\.|Banned player .*? tried to connect from endpoint .*? \[routed via .*?\]\.)|.*? \(.*?\) connected from IP address .*? sent Do Not Track signal\./;
const REGEX_disconnect = /.*? \((?<user>.*?)\) disconnected from IP address .*?\. Last class: (?<role>.*?)\./