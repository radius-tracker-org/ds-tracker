module.exports = [
    {
        repoUrl: 'git@github.com:radius-tracker-org/shadcn-ui-template.git',
        displayName: 'shadcn-ui-template',
        isTargetModuleOrPath: {
            mui: /^(@mui|@material-ui)/,
            headlessui: /^@headlessui/,
            radixui: /^@radix-ui/,
        },
        since: new Date("2024-01-01"),
    }
]
