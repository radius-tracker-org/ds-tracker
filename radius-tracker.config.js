module.exports = [
    {
        repoUrl: 'radius-tracker-org/shadcn-ui-template',
        displayName: 'shadcn-ui-template',
        isTargetModuleOrPath: {
            mui: /^(@mui|@material-ui)/,
            headlessui: /^@headlessui/,
            radixui: /^@radix-ui/,
        },
        since: new Date("2024-01-01"),
    }
]