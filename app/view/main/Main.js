/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
 Ext.define('BinaryUI.view.main.Main', {
    extend: 'Ext.container.Container',

    requires: [
        'Ext.layout.container.Border',
        'Ext.ux.dashboard.GoogleRssPart',
        'Ext.dashboard.Dashboard'
    ],

    controller: 'main',

    layout: {
        type: 'border'
    },

    items: [
    {
        id: 'app-header',
        xtype: 'app-header',
        region: 'north'
    },
    ,{
        id: 'app-options',
        title: 'Options',
        region: 'west',
        animCollapse: true,
        width: 200,
        minWidth: 150,
        maxWidth: 400,
        split: true,
        collapsible: true,
        layout:{
            type: 'accordion',
            animate: true
        },
        header: {
            itemPosition: 1, // after title before collapse tool
            items: [{
                xtype: 'splitbutton',
                text: 'Add Feed',
                handler: 'onAddFeed',
                menu: [{
                    text: 'Sencha Blog',
                    handler: 'onAddFeedUrl',
                    feedUrl: 'http://feeds.feedburner.com/extblog'
                },{
                    text: 'Ajaxian',
                    handler: 'onAddFeedUrl',
                    feedUrl: 'http://feeds.feedburner.com/ajaxian'
                },{
                    text: 'CNN',
                    handler: 'onAddFeedUrl',
                    feedUrl: 'http://rss.cnn.com/rss/edition.rss'
                },{
                    text: 'Sci/Tech - Google News',
                    handler: 'onAddFeedUrl',
                    feedUrl: 'http://news.google.com/news?ned=us&topic=t&output=rss'
                }, {
                    text: 'Yahoo News',
                    handler: 'onAddFeedUrl',
                    feedUrl: 'http://rss.cnn.com/rss/edition.rss'
                }, {
                    text: 'ESPN Top News',
                    handler: 'onAddFeedUrl',
                    feedUrl: 'http://sports.espn.go.com/espn/rss/news'
                }]
            }]
        },
        items: [{
            title:'My Account',
            html: '<ul><li>Portfolio</li><li>Statement</li><li>Profit Table</li><li>Password</li></ul>',
            border: false,
            autoScroll: true,
            glyph: '9798@',
        },{
            title:'Trading',
            html: '<div class="portlet-content"><ul><li>Forex</li><li>Indices</li><li>Commodities</li><li>Sectors</li><li>Randoms</li></ul></div>',
            border: false,
            autoScroll: true,
            glyph: '9798@',
            iconCls: 'settings'
        },{
            title:'Apps',
            html: '<div class="portlet-content"></div>',
            border: false,
            autoScroll: true,
            glyph: '9798@',
        }]
    },{
        xtype: 'dashboard',
        reference: 'dashboard',
        region: 'center',
        stateful: false,

        columnWidths: [
            0.35,
            0.40,
            0.25
        ],
        parts: {
            rss: 'google-rss',

            stocks: {
                viewTemplate: {
                    title: 'Markets',
                    items: [{
                        xtype: 'markets'
                    }]
                }
            },

            statement: {
                viewTemplate: {
                    title: 'Statement',
                    items: [{
                        xtype: 'statement'
                    }]
                }
            },

            portfolio: {
                viewTemplate: {
                    title: 'Portfolio',
                    items: [{
                        xtype: 'portfolio'
                    }]
                }
            },

            stockTicker: {
                viewTemplate: {
                    title: 'Stocks',
                    items: [{
                        xtype: 'stocks'
                    }]
                }
            }
        },

        defaultContent: [{
            type: 'rss',
            columnIndex: 0,
            height: 500,
            feedUrl: 'http://feeds.feedburner.com/extblog'
        }, {
            type: 'stockTicker',
            columnIndex: 1,
            height: 300
        }, {
            type: 'portfolio',
            columnIndex: 1,
            height: 300
        }, {
            type: 'statement',
            columnIndex: 1,
            height: 300
        }, {
            type: 'stocks',
            columnIndex: 1,
            height: 300
        }, {
            type: 'rss',
            columnIndex: 2,
            height: 350,
            feedUrl: 'http://rss.cnn.com/rss/edition.rss'
        }]
    }]
});