/*
 * Equicord, a Discord client mod
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { definePluginSettings } from "@api/Settings";
import { EquicordDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

import { FloodPanelButton } from "./components/ChatBarButton";
import { FloodIcon } from "./components/Icons";

const settings = definePluginSettings({
    defaultDelay: {
        type: OptionType.NUMBER,
        description: "Default delay between messages (ms).",
        default: 500
    },
    defaultShuffle: {
        type: OptionType.BOOLEAN,
        description: "Randomize message order by default.",
        default: true
    }
});

export { settings };

export default definePlugin({
    name: "FloodPanel",
    enabledByDefault: true,
    description: "Send a flood of messages rapidly in any channel using built-in phrases. Accessible from the chat bar.",
    authors: [EquicordDevs.nobody],
    settings,

    chatBarButton: {
        icon: FloodIcon,
        render: FloodPanelButton
    },
});