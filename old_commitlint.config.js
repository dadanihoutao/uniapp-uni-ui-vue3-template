module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-conventionalcommits',
  defaultIgnores: false,
  rules: {
    // 'subject-case': [0, 'never'],
    'type-enum': [
      2, // 代表必须输入
      'always',
      [
        'feat', // 一个新的特性
        'fix', // 修复一个Bug
        'docs', // 变更的只有文档
        'style', // 修改样式
        'refactor', // 代码重构，注意和特性、修复区分开
        'perf', // 性能优化
        'test', // 添加一个测试
        'build', // 修改项目构建系统配置
        'ci', // 修改项目继续集成流程
        'chore', // 改变构建流程、或者增加依赖库、工具等
        // 'improvement', // 用于对当前实现进行改进而没有添加新功能或修复错误的提交
        'merge', // 仅进行分支合并
        'revert' // 回滚到上一个版本
      ]
    ]
  },
  prompt: {
    // messages: {
    // type: "Select the type of change that you're committing222:",
    // scope: "Denote the SCOPE of this change (optional):",
    // customScope: "Denote the SCOPE of this change:",
    // subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
    // body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    // breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
    // footerPrefixsSelect: "Select the ISSUES type of changeList by this change (optional):",
    // customFooterPrefixs: "Input ISSUES prefix:",
    // footer: "List any ISSUES by this change. E.g.: #31, #34:\n",
    // confirmCommit: "Are you sure you want to proceed with the commit above?"
    // 中文版
    // type: '选择你要提交的类型 :',
    // scope: '选择一个提交范围（可选）:',
    // customScope: '请输入自定义的提交范围 :',
    // subject: '填写简短精炼的变更描述 :\n',
    // body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
    // breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
    // footerPrefixsSelect: '选择关联issue前缀（可选）:',
    // customFooterPrefixs: '输入自定义issue前缀 :',
    // footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
    // confirmCommit: '是否提交或修改commit ?'
    // }
    // questions: {
    //   type: {
    //     description: '选择您正在提交的更改类型:',
    //     enum: {
    //       feat: {
    //         description: '一个新功能',
    //         title: '特性',
    //         emoji: '✨'
    //       },
    //       fix: {
    //         description: 'bug修复',
    //         title: '漏洞修补',
    //         emoji: '🐛'
    //       }
    //     }
    //   }
    // }
    // types: [
    //   // 中文版
    //   { value: 'feat', name: '特性:   🚀  新增功能', emoji: '🚀' },
    //   { value: 'fix', name: '修复:   🧩  修复缺陷', emoji: '🧩' },
    //   { value: 'docs', name: '文档:   📚  文档变更', emoji: '📚' },
    //   {
    //     value: 'style',
    //     name: '格式:   🎨  代码格式（不影响功能，例如空格、分号等格式修正）',
    //     emoji: '🎨'
    //   },
    //   {
    //     value: 'refactor',
    //     name: '重构:   ♻️  代码重构（不包括 bug 修复、功能新增）',
    //     emoji: '♻️'
    //   },
    //   { value: 'perf', name: '性能:   ⚡️  性能优化', emoji: '⚡️' },
    //   {
    //     value: 'test',
    //     name: '测试:   ✅  添加疏漏测试或已有测试改动',
    //     emoji: '✅'
    //   },
    //   {
    //     value: 'build',
    //     name: '构建:   📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）',
    //     emoji: '📦️'
    //   },
    //   { value: 'ci', name: '集成:   🎡  修改 CI 配置、脚本', emoji: '🎡' },
    //   { value: 'chore', name: '回退:   ⏪️  回滚 commit', emoji: '⏪️' },
    //   {
    //     value: 'revert',
    //     name: '其他:   🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）',
    //     emoji: '🔨'
    //   }
    // ],
    // useEmoji: true,
    // themeColorCode: '',
    // scopes: [],
    // allowCustomScopes: true,
    // allowEmptyScopes: true,
    // customScopesAlign: 'bottom',
    // customScopesAlias: 'custom',
    // emptyScopesAlias: 'empty',
    // upperCaseSubject: false,
    // allowBreakingChanges: ['feat', 'fix'],
    // breaklineNumber: 100,
    // breaklineChar: '|',
    // skipQuestions: [],
    // issuePrefixs: [
    //   { value: 'closed', name: 'closed:   ISSUES has been processed' }
    // ],
    // customIssuePrefixsAlign: 'top',
    // emptyIssuePrefixsAlias: 'skip',
    // customIssuePrefixsAlias: 'custom',
    // allowCustomIssuePrefixs: true,
    // allowEmptyIssuePrefixs: true,
    // confirmColorize: true,
    // maxHeaderLength: Infinity,
    // maxSubjectLength: Infinity,
    // minSubjectLength: 0,
    // scopeOverrides: undefined,
    // defaultBody: '',
    // defaultIssues: '',
    // defaultScope: '',
    // defaultSubject: ''
  }
}
